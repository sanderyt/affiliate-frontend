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
  options: string[];
}

export const Select: FC<Props> = ({ value, handleChange, label, options }) => {
  return (
    <div>
      <InputLabel>{label}</InputLabel>
      <StyledSelect
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        onChange={handleChange}
      >
        {options &&
          options.map(option => {
            return (
              <MenuItem value={option} key={option}>
                {option}
              </MenuItem>
            );
          })}
      </StyledSelect>
    </div>
  );
};
