import React, { FC, ReactNode } from "react";

import { StyledContentBox } from "./styles";

interface Props {
  children: ReactNode;
}

export const ContentBox: FC<Props> = ({ children }) => {
  return (
    <StyledContentBox
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {children}
    </StyledContentBox>
  );
};
