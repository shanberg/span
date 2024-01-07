type Row = {
  id?: string;
  str: string;
  widthPerChar: number;
  width: number;
};

type Settings = {
  performanceMode: boolean;
  styles: string;
};

type FontStyle = {
  label: string;
  props: {
    fontSize: string;
    fontWeight: string;
    fontFamily: string;
  };
};


type Analysis = {
  averageStrLength: number;
  averageWidthPx: number;
  medianStrLength?: number;
  medianWidthPx?: number;
  averageWidthPerCharPx: number;
  stdDevWidthPx: number;
  stdDevWidthPerCharPx: number;
  stdDevs1Px: number;
  stdDevs2Px: number;
  stdDevs3Px: number;
  stdDevs4Px: number;
  percentile70Px: number;
  percentile80Px: number;
  percentile90Px: number;
  percentile95Px: number;
  percentile99Px: number;
  percentile100Px: number;
};