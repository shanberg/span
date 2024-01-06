'use client'

import React from "react";
import { useResizedDimensions } from "~/hooks/useResizedDimensions";
import { SettingsContext } from "./SettingsContext";
import { Text, Table } from "./ui";

type RowProps = {
  str: string;
  logRow: (rowData: Row) => void;
};

export const Row = ({ str, logRow }: RowProps) => {
  const settings = React.useContext(SettingsContext);
  const elementRef = React.useRef<any>(null);

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
      <Table.Row>
        <Table.Cell whiteSpace="nowrap">{textEl}</Table.Cell>
        <Table.Cell textAlign="end">{width && width.toFixed(2)}</Table.Cell>
        <Table.Cell textAlign="end">{widthPerChar?.toFixed(1)}</Table.Cell>
      </Table.Row>
    );
  }
};