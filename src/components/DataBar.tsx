import { VStack, Box, Grid } from "./ui";

export const DataBar = ({ widthPx, label }: { widthPx: number, label: React.ReactElement }) => {
  return (
    <VStack
      position="relative"
      alignItems="flex-start"
      gap={1}
    >
      <Grid columns={3} gap={3} width="14em">
        {label}
      </Grid>
      <Box
        style={{
          width: widthPx + "px",
        }}
        bg="fg.muted"
        height="4px"
      />
    </VStack>
  );
};
