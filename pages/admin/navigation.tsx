import React, { FC } from "react";
import { Grid } from "@material-ui/core";

import { LayoutAdmin } from "../../components/LayoutAdmin";

interface Props {}

const Navigation: FC<Props> = ({}) => {
  return (
    <LayoutAdmin>
      <Grid container justify="center" direction="column" alignItems="center">
        <h2>Navigatie</h2>
        <div>Je hebt nog geen navigatie, voeg je eerste categorie toe!</div>
      </Grid>
    </LayoutAdmin>
  );
};

export default Navigation;
