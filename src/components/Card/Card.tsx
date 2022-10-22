import React, { CSSProperties } from "react";
import { Card } from "@mui/material";

interface CardProps {
  children: React.ReactElement;
  style?: CSSProperties;
  sx?: any;
  cardmedia?: React.ReactElement;
  className?: string;
  ref?: any;
}

const SystemCard: React.FunctionComponent<CardProps> = (props) => {
  const { children, style, sx, cardmedia, className, ref } = props;

  return (
    <>
      <Card ref={ref} sx={sx} style={style} className={className}>
        <div style={{ alignItems: "center" }}>{cardmedia}</div>
        {children}
      </Card>
    </>
  );
};

export default SystemCard;
