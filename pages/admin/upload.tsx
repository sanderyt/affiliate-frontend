import React, { useState, ChangeEvent } from "react";
import { LayoutAdmin } from "../../components/LayoutAdmin";
import { Button, Grid, Snackbar } from "@material-ui/core";
import { Publish } from "@material-ui/icons";

const Upload = () => {
  const [files, setFiles] = useState(null);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();
    const uploadedFile = e.target.files && e.target.files[0];

    if (uploadedFile) {
      if (validateFile(uploadedFile)) {
        fileReader.readAsText(e.target.files[0], "UTF-8");
        fileReader.onload = e => {
          setFiles(e.target.result);
          const results = e.target.result;
        };
      } else {
        setError(true);
        setErrorMessage("This is not a JSON file. Please upload a JSON file.");
      }
    }
  };

  const validateFile = (file: any) => {
    const allowedExtensions = ["json"];
    const fileExtension = file.name.split(".").pop();

    if (!allowedExtensions.includes(fileExtension)) {
      return false;
    } else {
      return true;
    }
  };

  const handleClose = () => setError(false);

  return (
    <LayoutAdmin>
      <Grid container justify="center" direction="column" alignItems="center">
        <h1>Upload page</h1>
        <Button variant="contained" component="label" color="primary">
          <Publish />
          Upload File
          <input
            type="file"
            hidden
            onChange={handleChange}
            accept="application/JSON"
          />
        </Button>
        {files && <h1>Files uploaded</h1>}
        {error && (
          <Snackbar
            open={error}
            autoHideDuration={6000}
            onClose={handleClose}
            message={errorMessage}
          />
        )}
      </Grid>
    </LayoutAdmin>
  );
};

export default Upload;
