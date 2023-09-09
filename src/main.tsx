import * as React from "react";
import { createRoot } from "react-dom/client";

const fontStyles = [
  {
    label: "Text/sm",
    props: {
      fontFamily: "Libre Franklin",
      fontSize: "12px",
      fontStyle: "normal",
      fontWeight: "400"
    }
  },
  {
    label: "Text/md",
    props: {
      fontFamily: "Libre Franklin",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: "400"
    }
  },
  {
    label: "Text/lg",
    props: {
      fontFamily: "Libre Franklin",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: "400"
    }
  },
  {
    label: "Text/xl",
    props: {
      fontFamily: "Libre Franklin",
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: "400"
    }
  },
  {
    label: "Text/2xl",
    props: {
      fontFamily: "Libre Franklin",
      fontSize: "26px",
      fontStyle: "normal",
      fontWeight: "400"
    }
  },
  {
    label: "Text/3xl",
    props: {
      fontFamily: "Libre Franklin",
      fontSize: "30px",
      fontStyle: "normal",
      fontWeight: "400"
    }
  },
  {
    label: "Button/sm",
    props: {
      color: "var(--interaction-main, #005CEA)",
      fontFamily: "Libre Franklin",
      fontSize: "12px",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "20px"
    }
  },
  {
    label: "Button/md",
    props: {
      color: "var(--interaction-main, #005CEA)",
      fontFamily: "Libre Franklin",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "24px"
    }
  },
  {
    label: "Button/lg",
    props: {
      color: "var(--interaction-main, #005CEA)",
      fontFamily: "Libre Franklin",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "24px"
    }
  }
];

const SettingsContext = React.createContext<Settings>({
  performanceMode: false,
  fontStyle: fontStyles[1]
});

const SettingsProvider = SettingsContext.Provider;

import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalContent,
  Text,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  ChakraProvider,
  Center,
  Tbody,
  VStack,
  Divider,
  Box,
  useDisclosure,
  Button,
  Textarea,
  ModalOverlay,
  HStack,
  Heading,
  ButtonGroup,
  Skeleton,
  ModalCloseButton,
  extendTheme,
  Flex,
  Select,
  SimpleGrid
} from "@chakra-ui/react";

const STRINGS = [
  "Untitled 6.numbers",
  "Untitled 5.numbers out.png",
  "ul520-turbo_full_view.png",
  "rpi3_full_view.png",
  "ul520-turbo_full_view-1.png",
  "u1520-turbo_full_view.png",
  "warehouse_cube-negy.jpg",
  "warehouse_cube-negy.jpg",
  "warehouse_cube-negy.jpg",
  "warehouse_cube-posv.jpg",
  "warehouse_cube-posy.jpg",
  "warehouse_cube-posy.jpg",
  "warehouse_cube-posx.jpg",
  "warehouse_cube-posx.jpg",
  "warehouse_cube-negx.jpg",
  "warehouse_cube-negx.jpg",
  "warehouse_cube-negx.jpg",
  "warehouse_cube-negz.jpg",
  "warehouse_cube-negz.jpg",
  "warehouse_cube-negz.jpg",
  "warehouse_cube-posz.jpg",
  "warehouse_cube-posz.jpg",
  "warehouse_cube-posz.jpg",
  "warehouse.exr",
  "e0026532-sp_full_view.png",
  "stisO.1.zip",
  "CleanShot 2023-09-07 at 11.47.55png",
  "u1520-turbo.sti",
  "speaker.stl a rpi3.sti",
  "P-02253742-N107-AB_SEAT.stl",
  "42443523.stl",
  "CleanShot 2023-09-05 at 14.03.39png",
  "5-X-9__B (1).png",
  "5-X-9__B (1).pdf",
  "CleanShot 2023-09-04 at 12.56.15@2x.png",
  "encoded-20230903022329.txt",
  "CleanShot 2023-09-0at 13.07.36.png",
  "CleanShot 2023-09-0at 13.03.51.png",
  "CleanShot 2023-09-0at 13.03.25.png",
  "CleanShot 2023-09-0at 12.55.02.png",
  "Copy of _1619628.webp",
  "shark-tank-loop.gif",
  "product-shark-tank-wrong.mp4",
  "IMG_3379.mov",
  "turboooo-gray.png",
  "turboooo-orange.png",
  "42443523.png _bracket.png",
  "P-02253742-N107-AB_SEAT.png",
  "rpi3.png",
  "ul520-turbo.png",
  "42443523 copy.png",
  "42443523.png",
  "CleanShot 2023-08-30 at 09.07.30png",
  "cleanshot_2023-08-30_at_09.03.23.png",
  "Against Automaticity.md",
  "CleanShot 2023-08-27 at 16.28.11.mp4",
  "da piston3.png",
  "piston2.png",
  "piston1.png",
  "cylinder.png"
];

type Row = {
  id?: string;
  str: string;
  widthPerChar: number;
  width: number;
};

const fonts = {
  default: "'Libre Franklin', sans-serif",
  data: "'Roboto Mono', monospace"
};

const fontSizes = {
  sm: "0.75rem",
  md: "0.875rem",
  lg: "1rem",
  xl: "1.25rem",
  "2xl": "1.625rem",
  "3xl": "1.825rem"
};

const fontWeights = {
  default: 400,
  medium: 500,
  heavy: 600
};

const lineHeights = {
  sm: "1.25rem",
  md: "1.5rem",
  lg: "1.5rem",
  xl: "1.5rem",
  "2xl": "2rem",
  "3xl": "2.5rem"
};

const typography = { fonts, fontSizes, fontWeights, lineHeights };

const theme = extendTheme({ typography });

const EditRowsDialog = ({ isOpen, onClose, strings, onUpdateRows }: {
  isOpen: boolean,
  onClose: () => void;
  strings: string[],
  onUpdateRows: (arr: string[]) => void
}) => {
  const initialValue = strings?.join("\n") || "";
  const [newValue, setNewValue] = React.useState<string>(initialValue);

  const splitNewValue: string[] = newValue.split("\n");

  return (
    <Modal
      isOpen={isOpen}
      size="lg"
      onClose={onClose}
      closeOnOverlayClick={false}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalHeader>
          <Heading size="lg">Edit Rows</Heading>
          <Text fontWeight="normal">Add text separated by new line</Text>
        </ModalHeader>
        <Divider />
        <ModalBody as={VStack} align="stretch" p={0}>
          <Textarea
            borderRadius="none"
            px={6}
            borderLeft="0"
            borderRight="0"
            defaultValue={newValue}
            rows={20}
            onChange={(e) => setNewValue(e.target.value)}
          />
        </ModalBody>
        <ModalFooter>
          <ButtonGroup>
            <Button onClick={onClose}>Cancel</Button>
            <Button
              colorScheme="blue"
              onClick={() => {
                onUpdateRows(splitNewValue);
              }}
            >
              Update rows
            </Button>
          </ButtonGroup>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

function useResizedDimensions(ref: React.RefObject<any>, settings: Settings): number | null {
  // Synchronized state for settings to track if user has updated settings
  const [syncSettings, setSyncSettings] = React.useState(settings);

  // State to store dimensions
  const [width, setWidth] = React.useState(null);

  // Function to measure and update dimensions
  const measureAndUpdate = () => {
    if (ref.current) {
      const width = ref.current.getBoundingClientRect().width;
      setWidth(width);
    }
  };

  React.useEffect(() => {
    // Compare old settings with new settings. If they are different, update dimensions.
    if (JSON.stringify(syncSettings) !== JSON.stringify(settings)) {
      measureAndUpdate();
      setSyncSettings(settings); // Update synchronized settings
    }
  }, [settings, syncSettings]); // Re-run effect when 'settings' changes

  // Initial measurement on mount
  React.useEffect(() => {
    measureAndUpdate();
  }, []);

  return width;
}

type RowProps = {
  str: string;
  logRow: (rowData: Row) => void;
};

const Row = ({ str, logRow }: RowProps) => {
  const settings = React.useContext(SettingsContext);
  const elementRef = React.useRef<any>(null);
  // const dimensions = useDimensions(elementRef);

  const width = useResizedDimensions(elementRef, settings);
  const widthPerChar = width && width / str.length;

  React.useEffect(() => {
    if (widthPerChar && typeof widthPerChar === "number") {
      logRow({
        widthPerChar,
        str,
        width: width
      });
    }
  }, [widthPerChar, width, settings]);

  const textEl = (
    <Text {...settings.fontStyle.props} width="max-content" ref={elementRef}>
      {str}
    </Text>
  );

  if (settings.performanceMode) {
    return textEl;
  } else {
    return (
      <Tr>
        <Td whiteSpace="nowrap">{textEl}</Td>
        <Td textAlign="end">{width && width.toFixed(2)}</Td>
        <Td textAlign="end">{widthPerChar?.toFixed(1)}</Td>
      </Tr>
    );
  }
};

type Analysis = {
  averageStrLength: number;
  averageWidthPx: number;
  averageWidthPerCharPx: number;
  stdDevWidthPx: number;
  stdDevWidthPerCharPx: number;
  stdDevs1Px: number;
  stdDevs2Px: number;
  stdDevs3Px: number;
  stdDevs4Px: number;
};

const analyzeRows = (rows: Row[]): Analysis => {
  const totalRows = rows.length;

  const totalWidthPx = rows.reduce((acc, row) => acc + row.width, 0);
  const averageWidthPx = totalWidthPx / totalRows;

  const totalStrLength = rows.reduce((acc, row) => acc + row.str.length, 0);
  const averageStrLength = Math.ceil(totalStrLength / totalRows);

  const totalWidthPerCharPx = rows.reduce(
    (acc, row) => acc + row.widthPerChar,
    0
  );
  const averageWidthPerCharPx = totalWidthPerCharPx / totalRows;

  const varianceWidthPx =
    rows.reduce(
      (acc, row) => acc + Math.pow(row.width - averageWidthPx, 2),
      0
    ) / totalRows;
  const stdDevWidthPx = Math.sqrt(varianceWidthPx);

  const varianceWidthPerCharPx =
    rows.reduce(
      (acc, row) => acc + Math.pow(row.widthPerChar - averageWidthPerCharPx, 2),
      0
    ) / totalRows;
  const stdDevWidthPerCharPx = Math.sqrt(varianceWidthPerCharPx);

  return {
    averageStrLength,
    averageWidthPx,
    stdDevWidthPx,
    stdDevs1Px: stdDevWidthPx * 1 + averageWidthPx,
    stdDevs2Px: stdDevWidthPx * 2 + averageWidthPx,
    stdDevs3Px: stdDevWidthPx * 3 + averageWidthPx,
    stdDevs4Px: stdDevWidthPx * 4 + averageWidthPx,
    averageWidthPerCharPx,
    stdDevWidthPerCharPx
  };
};

const DataBar = ({ widthPx, label }: { widthPx: number, label: React.ReactElement }) => {
  return (
    <VStack
      position="relative"
      align="flex-start"
      spacing={0}
      borderRadius="4px"
    >
      <Box
        width={widthPx + "px"}
        color="blue.500"
        borderTop="4px solid"
        borderRadius="100px"
        boxShadow="0 1px 6px -1px"
      />
      <SimpleGrid columns={3} gap={3} width="14em">
        {label}
      </SimpleGrid>
    </VStack>
  );
};

type StDevBarProps = {
  analysis: Analysis,
  sdev: number,
  pctCoverage: number
}

const StDevBar = ({ analysis, sdev, pctCoverage }: StDevBarProps) => {
  const numChars = Math.floor(sdev / analysis.averageWidthPerCharPx);

  return (
    <DataBar
      widthPx={sdev}
      label={
        <>
          <strong>{pctCoverage}%</strong>
          <span>{numChars} chars</span>
          <span>{sdev.toFixed() + "px"}</span>
        </>
      }
    />
  );
};

type FontStyle = {
  label: string;
  props: {
    fontSize: string;
    fontWeight: string;
    fontFamily: string;
  };
};

type Settings = {
  performanceMode: boolean;
  fontStyle: FontStyle;
};

function App() {
  // State
  const [strings, setStrings] = React.useState<string[]>(STRINGS);
  const [rowData, setRowData] = React.useState<any>({});
  const { isOpen, onClose, onOpen } = useDisclosure();
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
    onClose();
  }, []);

  // Map rowData to an array
  const resultsArr: Row[] = Object.keys(rowData).map((rowKey) => ({
    id: rowKey,
    ...rowData[rowKey]
  }));

  const analysis = analyzeRows(resultsArr);

  return (
    <ChakraProvider>
      <SettingsProvider value={settings}>
        <EditRowsDialog
          onUpdateRows={handleUpdateRows}
          strings={strings}
          isOpen={isOpen}
          onClose={onClose}
        />
        <VStack as={Center} minHeight="100vh" p={4} align="stretch">
          {/* Controls */}
          <VStack
            align="flex-start"
            spacing={4}
            sx={{
              backdropFilter: "blur(20px)"
            }}
            boxShadow="
              inset 0 0 20px 20px #fafaff,
              inset 0 0 0 2px #ffffff50,
              0 8px 12px #00000011
            "
            p={6}
            borderRadius="8px"
            position="sticky"
            overflow="hidden"
            top={4}
          >
            <HStack
              position="relative"
              px={6}
              py={1}
              margin={-6}
              mb={2}
              alignSelf="stretch"
              width="auto"
              bottom="auto"
              _after={{
                content: "''",
                position: "absolute",
                height: "1px",
                bottom: 0,
                left: 0,
                right: 0,
                opacity: 0.05,
                bg: "black"
              }}
            >
              <Heading opacity={0.7} fontSize="14px">
                Text Width
              </Heading>
              <Text opacity={0.7} fontSize="14px">
                Find the best width for a set of text
              </Text>
            </HStack>
            <Box
              position="absolute"
              borderRadius="inherit"
              inset={0}
              zIndex={-1}
              as="svg"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <filter id="noiseFilter">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="30.0"
                  numOctaves="3"
                  stitchTiles="stitch"
                />
              </filter>
              <rect
                width="100%"
                opacity="0.5"
                height="100%"
                filter="url(#noiseFilter)"
              />
            </Box>

            <HStack
              justifyContent="space-between"
              alignSelf="stretch"
              alignItems="flex-start"
            >
              <Skeleton isLoaded={!!analysis.averageStrLength} width="100%">
                <VStack align="flex-start" spacing={4}>
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
                </VStack>
              </Skeleton>

              <Flex
                gap={2}
                minWidth="8em"
                alignItems="stretch"
                flexDirection="column"
                whiteSpace="nowrap"
              >
                <Button flexShrink={0} colorScheme="blue" onClick={onOpen}>
                  Edit Rows
                </Button>
                <Select
                  bg="#fff"
                  flexShrink={0}
                  defaultValue={settings.fontStyle.label}
                  onChange={(e) => handleUpdateStyle(e.target.value)}
                >
                  {fontStyles.map((fs) => (
                    <option value={fs.label}>{fs.label}</option>
                  ))}
                </Select>
              </Flex>
            </HStack>
          </VStack>

          {settings.performanceMode ? (
            <VStack align="flex-start" p={6} spacing={7}>
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
            <Table margin="auto" width="100%" variant="simple">
              <Thead>
                <Tr>
                  <Th>String</Th>
                  <Th textAlign="end">Width</Th>
                  <Th textAlign="end">Per char</Th>
                </Tr>
              </Thead>
              <Tbody>
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
              </Tbody>
            </Table>
          )}
        </VStack>
      </SettingsProvider>
    </ChakraProvider>
  );
}

export default App;

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
