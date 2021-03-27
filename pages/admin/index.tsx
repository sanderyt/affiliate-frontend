import React from "react";
import CSVReader from "react-csv-reader";

import { Grid, Box } from "@material-ui/core";
import { Sidebar } from "../../components/Sidebar";

const Index = () => {
  return (
    <Grid container>
      <Grid item md={2} xs={12}>
        <Sidebar />
      </Grid>
      <Grid item md={10} xs={12}>
        <Box display="flex" alignItems="center" justifyContent="center">
          <CSVReader
            onFileLoaded={(data, fileInfo) => console.dir(data, fileInfo)}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Index;
