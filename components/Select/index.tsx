import React, { FC, ChangeEvent } from "react";

import { InputLabel, MenuItem } from "@material-ui/core";
import { StyledSelect } from "./styles";

interface Props {
  label: string;
  value: any;
  handleChange:
    | ((
        event: ChangeEvent<{
          name?: string | undefined;
          value: unknown;
        }>,
        child: React.ReactNode
      ) => void)
    | undefined;
}

export const Select: FC<Props> = ({ value, handleChange, label }) => {
  return (
    <div>
      <InputLabel>{label}</InputLabel>
      <StyledSelect
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        onChange={handleChange}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </StyledSelect>
    </div>
  );
};
