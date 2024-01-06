import { DataBar } from "./DataBar";

export type StDevBarProps = {
  analysis: Analysis,
  sdev: number,
  pctCoverage: number
}
export const StDevBar = ({ analysis, sdev, pctCoverage }: StDevBarProps) => {
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
