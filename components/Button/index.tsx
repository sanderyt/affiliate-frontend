import React, { FC, ReactNode } from "react";

import { StyledButton } from "./styles";

interface Props {
  children: ReactNode;
  color: "default" | "inherit" | "primary" | "secondary" | undefined;
  type: "submit" | "button" | "reset";
  clickHandler?: () => void;
}

export const Button: FC<Props> = ({ children, color, clickHandler }) => {
  return (
    <StyledButton
      variant="contained"
      color={color}
      type="submit"
      onClick={clickHandler}
    >
      {children}
    </StyledButton>
  );
};
