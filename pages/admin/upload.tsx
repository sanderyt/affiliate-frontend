import React, { useState, ChangeEvent } from "react";
import { LayoutAdmin } from "../../components/LayoutAdmin";
import { Button, Grid } from "@material-ui/core";
import { Publish } from "@material-ui/icons";

const Upload = () => {
  const [files, setFiles] = useState(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();

    if (e.target.files) {
      fileReader.readAsText(e.target.files[0], "UTF-8");
      fileReader.onload = e => {
        setFiles(e.target.result);
        const results = e.target.result;

        console.log(results, "result");
      };
    }
  };

  return (
    <LayoutAdmin>
      <Grid container justify="center" direction="column" alignItems="center">
        <h1>Upload page</h1>
        <Button variant="contained" component="label" color="primary">
          <Publish />
          Upload File
          <input type="file" hidden onChange={handleChange} />
        </Button>
        {files && <h1>Files uploaded</h1>}
      </Grid>
    </LayoutAdmin>
  );
};

export default Upload;
