'use client'

import React from 'react'

import { Text, Table, VStack, Button, Container, HStack, Box, Heading, Flex } from '~/components/ui'
import { SettingsProvider } from '~/components/SettingsContext'
import { EditRowsDialog } from '~/components/EditRowsDialog'
import { Row } from '~/components/Row'
import { DataBar } from '~/components/DataBar'
import { StDevBar } from '~/components/StDevBar'
import { analyzeRows } from '~/util'
import { fontStyles } from '~/lib/styles'
import { STRINGS } from '~/lib/data'

export default function Home() {
  const [strings, setStrings] = React.useState<string[]>(STRINGS);
  const [rowData, setRowData] = React.useState<any>({});
  const [displayMode, setDisplayMode] = React.useState<"sigma" | "percentile">("percentile");
  const [isOpen, setIsOpen] = React.useState(false)
  const [analysis, setAnalysis] = React.useState<any>(null)

  const [settings, setSettings] = React.useState<Settings>({
    performanceMode: false,
    fontStyle: fontStyles[1]
  });

  // Fn to push row data up to state after a row has been rendered
  const logRow = React.useCallback(
    (id: string, rowData: Row) => {
      setRowData((prev: Row) => ({ ...prev, [id]: rowData }));
    },
    [strings, settings]
  );

  const handleUpdateStyle = React.useCallback((label: string) => {
    const fontStyle = fontStyles.find((fs) => fs.label === label);

    setSettings((settings) => ({
      ...settings,
      fontStyle: fontStyle
    }) as Settings);

    setRowData([]);
  }, []);

  // When the rows have been edited
  const handleUpdateRows = React.useCallback((newStringArr: string[]) => {
    setRowData([]);
    setStrings(newStringArr);
    setIsOpen(false);
  }, []);

  // Map rowData to an array
  const resultsArr: Row[] = Object.keys(rowData).map((rowKey) => ({
    id: rowKey,
    ...rowData[rowKey]
  }));

  React.useEffect(() => {
    setAnalysis(analyzeRows(resultsArr))
  }, [resultsArr])

  return (
    <SettingsProvider value={settings}>

      <EditRowsDialog
        onUpdateRows={handleUpdateRows}
        strings={strings}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />

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
          background="bg.muted"
          p={6}
          borderRadius="xl"
          overflow="hidden"
          position="sticky"
          top={4}
        >
          <HStack
            alignSelf="stretch"
          >
            <Heading fontSize="14px" color="fg.muted">
              Measure Text Width
            </Heading>
            <Text color="fg.muted">
              Find the best width for a set of text
            </Text>

            <HStack ml="auto">
              <Button
                colorScheme={displayMode === "percentile" ? "blue" : undefined}
                onClick={() => setDisplayMode("percentile")}
              >
                Percentile
              </Button>
              <Button
                colorScheme={displayMode === "sigma" ? "blue" : undefined}
                onClick={() => setDisplayMode("sigma")}
              >
                Standard deviation
              </Button>
            </HStack>
          </HStack>

          <HStack
            justifyContent="space-between"
            alignSelf="stretch"
            alignItems="flex-start"
          >
            <Box
              minWidth="50%">
              <VStack alignItems="flex-start" gap={4} flex={1}>
                {analysis && (
                  <>
                    {displayMode === "sigma" ? (
                      <>
                        <DataBar
                          widthPx={analysis.averageWidthPx}
                          label={
                            <>
                              <strong>Average</strong>
                              <span>{analysis.averageStrLength} chars</span>
                              <span>{analysis.averageWidthPx.toFixed()}px</span>
                            </>
                          }
                        />
                        <StDevBar
                          analysis={analysis}
                          pctCoverage={68}
                          sdev={analysis.stdDevs1Px}
                        />
                        <StDevBar
                          analysis={analysis}
                          pctCoverage={95}
                          sdev={analysis.stdDevs2Px}
                        />
                        <StDevBar
                          analysis={analysis}
                          pctCoverage={99.7}
                          sdev={analysis.stdDevs3Px}
                        />
                      </>
                    ) : (
                      <>
                        <DataBar
                          widthPx={analysis.percentile70Px}
                          label={
                            <>
                              <strong>70%</strong>
                              <span>{analysis.percentile70Px?.toFixed()}px</span>
                            </>
                          }
                        />
                        <DataBar
                          widthPx={analysis.percentile90Px}
                          label={
                            <>
                              <strong>90%</strong>
                              <span>{analysis.percentile90Px?.toFixed()}px</span>
                            </>
                          }
                        />
                        <DataBar
                          widthPx={analysis.percentile95Px}
                          label={
                            <>
                              <strong>95%</strong>
                              <span>{analysis.percentile95Px?.toFixed()}px</span>
                            </>
                          }
                        />
                        <DataBar
                          widthPx={analysis.percentile99Px}
                          label={
                            <>
                              <strong>99%</strong>
                              <span>{analysis.percentile99Px?.toFixed()}px</span>
                            </>
                          }
                        />
                        <DataBar
                          widthPx={analysis.percentile100Px}
                          label={
                            <>
                              <strong>100%</strong>
                              <span>{analysis.percentile100Px?.toFixed()}px</span>
                            </>
                          }
                        />
                      </>
                    )}
                  </>
                )}
              </VStack>
            </Box>

            <Flex
              gap={2}
              minWidth="8em"
              alignItems="stretch"
              flexDirection="column"
              whiteSpace="nowrap"
            >
              <Button flexShrink={0} colorScheme="blue" onClick={() => setIsOpen(true)}>
                Edit Rows
              </Button>
            </Flex>
          </HStack>
        </VStack>

        {settings.performanceMode ? (
          <VStack alignItems="flex-start" p={6} gap={7}>
            {strings.map((str, index) => {
              const key = str + index;
              return (
                <Row
                  str={str}
                  key={key}
                  logRow={(rowData) => logRow(key, rowData)}
                />
              );
            })}
          </VStack>
        ) : (
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
                const key = str + index;
                return (
                  <Row
                    str={str}
                    key={key}
                    logRow={(rowData) => logRow(key, rowData)}
                  />
                );
              })}
            </Table.Body>
          </Table.Root>
        )}
      </VStack>

    </SettingsProvider>
  )
}
