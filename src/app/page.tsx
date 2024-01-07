'use client'

import React from 'react'
import { styled, RadioButtonGroup, Text, Table, VStack, Button, HStack, Heading, Flex } from '~/components/ui'
import { SettingsProvider } from '~/components/SettingsContext'
import { EditRowsDialog } from '~/components/EditRowsDialog'
import { EditStylesDialog } from '~/components/EditStylesDialog'
import { Row } from '~/components/Row'
import { DataBar } from '~/components/DataBar'
import { StDevBar } from '~/components/StDevBar'
import { analyzeRows } from '~/util'
import { STRINGS, TAGLINE, HELP } from '~/lib/data'
import Link from 'next/link'

const StyledLink = styled(Link)

type DisplayMode = "sigma" | "percentile"

const displayModes = [
  { id: "sigma", label: "Standard deviation", help: "Standard deviation indicates trends, and can help to anticipate wider content based on a limited sample." },
  { id: "percentile", label: "Percentile", help: "Percentile shows how wide a space should be to fit a given portion of the rows. 95% means 95% of all the rows will fit in a space this size." }
]

export default function Home() {

  // Prepare state

  // Strings store the specific content you want to measure
  const [strings, setStrings] = React.useState<string[]>(STRINGS);

  // Rowdata stores the results of measuring each string
  const [rowData, setRowData] = React.useState<any>({});

  // Render is a dummy state that is used to force a re-render
  const [render, setRender] = React.useState(false);

  // Display mode
  const [displayMode, setDisplayMode] = React.useState<DisplayMode>("percentile");

  // Dialogs
  const [isTextOpen, setIsTextOpen] = React.useState(false)
  const [isStylesOpen, setIsStylesOpen] = React.useState(false)

  // Settings
  const [settings, setSettings] = React.useState<Settings>({
    performanceMode: false,
    styles: ""
  });

  // Store the previous analysis for loading state
  const prevAnalysis = React.useRef<Analysis | undefined>(undefined)

  // Event handlers

  // Fn to push row data up to state after a row has been rendered
  // Each row gets this function as a prop, and fires it when it has been rendered
  const logRow = React.useCallback((key: string, rowData: Row) => {
    setRowData((prev: Row) => ({ ...prev, [key]: rowData }));
  }, [])

  // When the rows have been edited
  const handleUpdateRows = React.useCallback((newStringArr: string[]) => {
    setRowData({});
    setStrings(newStringArr);
    setIsTextOpen(false);
    setRender((prev) => !prev);
  }, []);

  // When the styles have been edited
  const handleUpdateStyles = React.useCallback((styles: string) => {
    setSettings((settings) => ({
      ...settings,
      styles
    }) as Settings);
    setRowData({});
    setIsStylesOpen(false);
    setRender((prev) => !prev);
  }, []);

  // Reactive data

  // Map rowData to an array
  const resultsArr: Row[] = React.useMemo(() => Object.keys(rowData).map((rowKey) => ({
    id: rowKey,
    ...rowData[rowKey]
  })), [rowData]);

  // Generate CSS string from styles
  const cssString = `.measured-row {${settings.styles}}`

  // Analyze the rows
  const analysis = React.useMemo(() => analyzeRows(resultsArr), [resultsArr])

  // Check if analysis is pending
  const isAnalysisPending = !analysis?.averageStrLength || isNaN(analysis?.averageStrLength)

  // Store the previous analysis for loading state
  if (!isAnalysisPending) {
    prevAnalysis.current = analysis
  }

  // Current Or Previous Analysis
  const cOPA = prevAnalysis.current
    ? isAnalysisPending
      ? prevAnalysis.current
      : analysis
    : analysis

  console.log({ cOPA, analysis, prevAnalysis: prevAnalysis.current })

  return (
    <SettingsProvider value={settings}>

      <EditRowsDialog
        onUpdateRows={handleUpdateRows}
        strings={strings}
        isOpen={isTextOpen}
        onClose={() => setIsTextOpen(false)}
      />

      <EditStylesDialog
        onUpdateStyles={handleUpdateStyles}
        styles={{}}
        isOpen={isStylesOpen}
        onClose={() => setIsStylesOpen(false)}
      />

      <style>{cssString}</style>

      <VStack
        minHeight="100vh"
        p={4}
        alignItems="stretch"
        justifyContent="flex-start"
      >
        {/* Controls */}
        <VStack
          alignItems="flex-start"
          gap={4}
          py={4}
        >
          <Flex
            flexWrap={{ base: "wrap", md: "nowrap" }}
            alignSelf="stretch"
            alignItems="center"
            gap={4}
          >
            <HStack gap={4}>
              <img src="/icon.svg" alt="Icon" width="64" height="64" />
              <VStack alignItems="flex-start" gap={0}>
                <Heading fontSize="lg" lineHeight="normal">{TAGLINE}</Heading>
                <Text color="fg.muted" fontSize="xs">{HELP}</Text>
                <Text color="fg.muted" fontSize="xs">by{' '}<StyledLink textDecoration="underline" href="https://codeandchrome.com">Code & Chrome</StyledLink></Text>
              </VStack>
            </HStack>

            <Flex
              gap={2}
              p={4}
              flex="0 0 auto"
              ml="auto"
              minWidth="8em"
              alignItems="stretch"
              flexDirection="row"
              whiteSpace="nowrap"
            >
              <Button flexShrink={0} colorScheme="blue" onClick={() => setIsTextOpen(true)}>
                Add rows
              </Button>
              <Button flexShrink={0} colorScheme="blue" onClick={() => setIsStylesOpen(true)}>
                Edit styles
              </Button>
            </Flex>

          </Flex>

        </VStack>
        <VStack
          alignItems="flex-start"
          gap={4}
          p={4}
          borderRadius="xl"
          overflow="hidden"
          position="sticky"
          zIndex={10}
          top={4}
          _after={{
            content: "''",
            position: "absolute",
            zIndex: -2,
            inset: 0,
            boxShadow: "inset 0 0 40px 18px var(--colors-bg-subtle)",
            backdropFilter: "blur(12px)",
            pointerEvents: "none",
            borderRadius: "inherit"
          }}
          _before={{
            background: "bg.muted",
            content: "''",
            position: "absolute",
            opacity: 0.5,
            zIndex: -1,
            inset: 0,
            pointerEvents: "none",
            borderRadius: "inherit"
          }}
        >

          <HStack
            justifyContent="flex-start"
            alignSelf="stretch"
            alignItems="flex-start"
            pb={2}
          >
            <VStack alignItems="flex-start" gap={4} flex={1}
              opacity={isAnalysisPending ? 0.5 : 1}
            >
              {analysis && (
                <>
                  {displayMode === "sigma" ? (
                    <>
                      <DataBar
                        widthPx={cOPA.averageWidthPx}
                        label={
                          <>
                            <strong>Average</strong>
                            <span>{cOPA.averageStrLength} chars</span>
                            <span>{cOPA.averageWidthPx.toFixed()}px</span>
                          </>
                        }
                      />
                      <StDevBar
                        analysis={cOPA}
                        pctCoverage={68}
                        sdev={cOPA.stdDevs1Px}
                      />
                      <StDevBar
                        analysis={cOPA}
                        pctCoverage={95}
                        sdev={cOPA.stdDevs2Px}
                      />
                      <StDevBar
                        analysis={cOPA}
                        pctCoverage={99.7}
                        sdev={cOPA.stdDevs3Px}
                      />
                    </>
                  ) : (
                    <>
                      <DataBar
                        widthPx={cOPA.percentile70Px}
                        label={
                          <>
                            <strong>70%</strong>
                            <span>{cOPA.percentile70Px?.toFixed()}px</span>
                          </>
                        }
                      />
                      <DataBar
                        widthPx={cOPA.percentile90Px}
                        label={
                          <>
                            <strong>90%</strong>
                            <span>{cOPA.percentile90Px?.toFixed()}px</span>
                          </>
                        }
                      />
                      <DataBar
                        widthPx={cOPA.percentile95Px}
                        label={
                          <>
                            <strong>95%</strong>
                            <span>{cOPA.percentile95Px?.toFixed()}px</span>
                          </>
                        }
                      />
                      <DataBar
                        widthPx={cOPA.percentile99Px}
                        label={
                          <>
                            <strong>99%</strong>
                            <span>{cOPA.percentile99Px?.toFixed()}px</span>
                          </>
                        }
                      />
                      <DataBar
                        widthPx={cOPA.percentile100Px}
                        label={
                          <>
                            <strong>100%</strong>
                            <span>{cOPA.percentile100Px?.toFixed()}px</span>
                          </>
                        }
                      />
                    </>
                  )}
                </>
              )}
            </VStack>

            <RadioButtonGroup.Root
              variant="outline"
              size="sm"
              onValueChange={(value) => setDisplayMode(value.value as DisplayMode)}
              defaultValue={displayMode}
            >
              {displayModes.map(({ id, label, help }) => (
                <RadioButtonGroup.Item key={id} value={id}
                  py={1}
                  px={2}
                  height="auto"
                >
                  <RadioButtonGroup.ItemControl />
                  <RadioButtonGroup.ItemText>{label}</RadioButtonGroup.ItemText>
                </RadioButtonGroup.Item>
              ))}
            </RadioButtonGroup.Root>

          </HStack>
        </VStack>

        <Table.Root>
          <Table.Head>
            <Table.Row>
              <Table.Cell>String</Table.Cell>
              <Table.Cell textAlign="end">Width</Table.Cell>
              <Table.Cell textAlign="end">Per char</Table.Cell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {strings.map((str, index) => {
              const key = str + index + JSON.stringify(render);
              return (
                <Row
                  str={str}
                  key={key}
                  isLogged={!!rowData[key]}
                  logRow={(rowData) => logRow(key, rowData)}
                />
              );
            })}
          </Table.Body>
        </Table.Root>
      </VStack>

    </SettingsProvider>
  )
}
