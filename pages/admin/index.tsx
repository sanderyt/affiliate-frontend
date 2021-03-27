import React from "react";
import { Grid } from "@material-ui/core";
import { Sidebar } from "../../components/Sidebar";

const Index = () => {
  return (
    <Grid container>
      <Grid item md={2} xs={12}>
        <Sidebar />
      </Grid>
      <Grid item md={10} xs={12}>
        Content
      </Grid>
    </Grid>
  );
};

export default Index;
