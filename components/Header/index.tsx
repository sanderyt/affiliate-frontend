import React, { FC } from "react";

import { StyledHeader } from "./styles";
import { Grid } from "@material-ui/core";

interface Props {}

export const Header: FC<Props> = ({}) => {
  return (
    <StyledHeader>
      <Grid container>
        <Grid item md={3} xs={12}>
          <h2>Logo</h2>
        </Grid>
        <Grid item md={9} xs={12}>
          <h2>Menu</h2>
        </Grid>
      </Grid>
    </StyledHeader>
  );
};
