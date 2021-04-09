import React, { FC } from "react";
import Link from "next/link";

import { StyledHeader } from "./styles";
import { Grid } from "@material-ui/core";
import { Navigation } from "../Navigation";

interface Props {}

export const Header: FC<Props> = ({}) => {
  return (
    <StyledHeader>
      <Grid container>
        <Grid item xs={3}>
          <Grid container justify="center" alignItems="center">
            <Link href="/">
              <h2>Logo</h2>
            </Link>
          </Grid>
        </Grid>
        <Grid item xs={9}>
          <Navigation />
        </Grid>
      </Grid>
    </StyledHeader>
  );
};
