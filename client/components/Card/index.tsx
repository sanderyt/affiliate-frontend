import React, { FC, ReactNode } from "react";

import { StyledCard } from "./styles";

interface Props {
  children: ReactNode;
}

export const Card: FC<Props> = ({ children }) => {
  return (
    <StyledCard display="flex" flexDirection="column" alignItems="center">
      {children}
    </StyledCard>
  );
};
