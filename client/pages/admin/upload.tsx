import React, { useState, ChangeEvent } from "react";
import { Button, Grid, Snackbar } from "@material-ui/core";
import { Publish } from "@material-ui/icons";

import { LayoutAdmin } from "../../components/LayoutAdmin";
import { Select } from "../../components/Select";
import { getObject } from "../../utils/utils";

const Upload = () => {
  const [files, setFiles] = useState<string | ArrayBuffer | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [category, setCategory] = useState("");

  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();
    const uploadedFile = e.target.files && e.target.files[0];

    if (uploadedFile) {
      if (validateFile(uploadedFile) && e.target.files) {
        fileReader.readAsText(e.target.files[0], "UTF-8");
        fileReader.onload = e => {
          if (e.target) {
            const results = e.target.result && JSON.parse(e.target.result);
            results.products.map((product: any) => {
              const keys = getObject(product);
            });
            setFiles(results);
          }
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

  const handleChangeSelect = (event: any) => {
    setCategory(event.target.value);
  };

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
            onChange={handleChangeFile}
            accept="application/JSON"
          />
        </Button>

        {files && (
          <>
            <h3>Kies de categorie</h3>
            <Select
              handleChange={handleChangeSelect}
              value={category}
              label="Kies de categorie"
              options={["dit zijn keys", "en dit ook"]}
            />
          </>
        )}

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
