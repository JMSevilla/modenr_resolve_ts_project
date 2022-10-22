import React, { cloneElement, CSSProperties } from "react";
import { Grid, Typography } from "@mui/material";

interface GridItemsObjects {
  childrenId: Number;
  children: React.ReactElement;
}

interface GridProps {
  rowSpacing?: any;
  columnSpacing?: any;
  GridItems: GridItemsObjects[];
  style: CSSProperties;
  spacing?: string;
  xs?: any | 6;
  md?: any | 0;
  lg?: any | 0;
}

const SystemGrid: React.FunctionComponent<GridProps> = ({
  rowSpacing,
  columnSpacing,
  GridItems,
  style,
  spacing,
  xs,
  md,
  lg,
}) => {
  return (
    <Grid
      container
      rowSpacing={rowSpacing}
      columnSpacing={columnSpacing}
      style={style}
      spacing={spacing}
    >
      {GridItems.map((item, index) => {
        return (
          <Grid item xs={xs} md={md} lg={lg} key={index}>
            {cloneElement(item.children)}
          </Grid>
        );
      })}
    </Grid>
  );
};

export default SystemGrid;
