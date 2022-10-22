import React, { CSSProperties } from "react";
import { Container } from "@mui/material";

interface ContainerProps {
  children: React.ReactElement;
  stylish?: CSSProperties;
  appClassName?: string;
  maxWidth?: any;
}

const SystemContainer: React.FunctionComponent<ContainerProps> = ({
  children,
  stylish,
  appClassName,
  maxWidth,
}) => {
  return (
    <Container maxWidth={maxWidth} style={stylish} className={appClassName}>
      {children}
    </Container>
  );
};

export default SystemContainer;
