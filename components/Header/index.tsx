import React, { FC } from "react";

import { StyledHeader } from "./styles";
import { Grid } from "@material-ui/core";

interface Props {}

export const Header: FC<Props> = ({}) => {
  return (
    <StyledHeader>
      <Grid container>
        <Grid item xs={3}>
          <Grid container justify="center" alignItems="center">
            <h2>Logo</h2>
          </Grid>
        </Grid>
        <Grid item xs={9}>
          <Grid container justify="center" alignItems="center">
            Menu
          </Grid>
        </Grid>
      </Grid>
    </StyledHeader>
  );
};
