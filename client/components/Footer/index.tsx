import React, { FC } from "react";
import Grid from "@material-ui/core/Grid";

import { StyledFooter } from "./styles";
interface Props {}

export const Footer: FC<Props> = ({}) => {
  return (
    <StyledFooter>
      <Grid container>
        <Grid item sm={4} xs={12}>
          <Grid container justify="center">
            <h2>Contactgegevens</h2>
          </Grid>
        </Grid>
        <Grid item sm={4} xs={12}>
          <Grid container justify="center">
            <h2>Navigatie</h2>
          </Grid>
        </Grid>
        <Grid item sm={4} xs={12}>
          <Grid container justify="center">
            <h2>Social media</h2>
          </Grid>
        </Grid>
      </Grid>
    </StyledFooter>
  );
};
