import React, { ChangeEvent, CSSProperties } from "react";
import { TextField, Typography } from "@mui/material";

interface Props {
  value?: string | null;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  label: string;
  variant?: any;
  style: CSSProperties;
  ismultiline?: boolean;
  rows?: any;
  iserror?: boolean;
  texthelper?: string;
  type: string;
  disabled?: boolean;
  className?: string;
  testid?: string;
  id?: any;
}

const SystemTextField: React.FC<Props> = (props) => {
  const {
    value,
    handleChange,
    placeholder,
    label,
    variant,
    style,
    ismultiline,
    rows,
    iserror,
    texthelper,
    type,
    disabled,
    className,
    testid,
    id,
  } = props;

  return (
    <>
      <Typography gutterBottom>{label}</Typography>
      <TextField
        className={className}
        disabled={disabled}
        type={type}
        value={value}
        style={style}
        placeholder={placeholder}
        onChange={handleChange}
        variant={variant}
        multiline={ismultiline}
        rows={rows}
        id={iserror ? "outlined-error-helper-text" : id}
        error={iserror}
        helperText={texthelper}
        inputProps={{ "data-testid": testid }}
      ></TextField>
    </>
  );
};

export default SystemTextField;
