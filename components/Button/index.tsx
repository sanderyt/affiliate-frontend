import React, { FC, ReactNode } from "react";

import { StyledButton } from "./styles";

interface Props {
  children: ReactNode;
  color: "default" | "inherit" | "primary" | "secondary" | undefined;
  type: "submit" | "button" | "reset";
}

export const Button: FC<Props> = ({ children, color }) => {
  return (
    <StyledButton variant="contained" color={color} type="submit">
      {children}
    </StyledButton>
  );
};
