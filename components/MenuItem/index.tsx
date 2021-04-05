import React, { FC } from "react";

import { StyledMenuItem } from "./styles";

interface Props {
  name: string;
  slug: string;
}

export const MenuItem: FC<Props> = ({ name, slug }) => {
  return (
    <StyledMenuItem display="flex" alignItems="center">
      {name}
    </StyledMenuItem>
  );
};
