import React from "react";
import { Button } from "@mui/material";

import { IButton } from "../../core/componentsInterfaces";

const SystemButton: React.FunctionComponent<IButton> = (props) => {
  const {
    buttonName,
    buttonColor,
    handleClick,
    variant,
    size,
    style,
    color,
    sx,
    disabled,
    key,
    autoFocus,
  } = props;

  return (
    <div className={buttonColor}>
      <Button
        key={key}
        variant={variant}
        style={style}
        onClick={handleClick}
        size={size}
        color={color}
        disabled={disabled}
        sx={sx}
        autoFocus={autoFocus}
      >
        {buttonName}
      </Button>
    </div>
  );
};

export default SystemButton;
