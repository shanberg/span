export const getPercentile = (rows: Row[], percentile: number) => {
  if (!rows.length) return 0;

  const sortedRows = rows.sort((a, b) => a.width - b.width);
  const index = Math.ceil((percentile / 100) * sortedRows.length) - 1;
  return sortedRows[index].width;
}

export const analyzeRows = (rows: Row[]): Analysis => {
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

  const percentile70Px = getPercentile(rows, 70);
  const percentile80Px = getPercentile(rows, 80);
  const percentile90Px = getPercentile(rows, 90);
  const percentile95Px = getPercentile(rows, 95);
  const percentile99Px = getPercentile(rows, 99);
  const percentile100Px = getPercentile(rows, 100);

  return {
    averageStrLength,
    averageWidthPx,
    stdDevWidthPx,
    stdDevs1Px: stdDevWidthPx * 1 + averageWidthPx,
    stdDevs2Px: stdDevWidthPx * 2 + averageWidthPx,
    stdDevs3Px: stdDevWidthPx * 3 + averageWidthPx,
    stdDevs4Px: stdDevWidthPx * 4 + averageWidthPx,
    averageWidthPerCharPx,
    stdDevWidthPerCharPx,
    percentile70Px,
    percentile80Px,
    percentile90Px,
    percentile95Px,
    percentile99Px,
    percentile100Px
  };
};
