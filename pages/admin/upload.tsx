import React from "react";
import { LayoutAdmin } from "../../components/LayoutAdmin";
import { Button, Grid } from "@material-ui/core";

const Upload = () => {
  return (
    <LayoutAdmin>
      <Grid container justify="center" direction="column" alignItems="center">
        <h1>Upload page</h1>
        <Button variant="contained" component="label" color="primary">
          Upload File
          <input type="file" hidden />
        </Button>
      </Grid>
    </LayoutAdmin>
  );
};

export default Upload;
