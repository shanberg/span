import { VStack, Box, Grid } from "./ui";

export const DataBar = ({ widthPx, label }: { widthPx: number, label: React.ReactElement }) => {
  return (
    <VStack
      position="relative"
      alignItems="flex-start"
      gap={0}
      borderRadius="4px"
    >
      <Box
        width={widthPx + "px"}
        color="blue.500"
        borderTop="4px solid"
        borderRadius="100px"
        boxShadow="0 1px 6px -1px"
      />
      <Grid columns={3} gap={3} width="14em">
        {label}
      </Grid>
    </VStack>
  );
};
