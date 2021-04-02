import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { Grid, TextField, Button } from "@material-ui/core";
import { Add } from "@material-ui/icons";

import { LayoutAdmin } from "../../components/LayoutAdmin";
import { ContentBox } from "../../components/ContentBox";

interface Inputs {}

const Navigation: FC<Props> = ({}) => {
  const { register, handleSubmit, watch, errors } = useForm<Inputs>();
  const onSubmit = data => console.log(data);

  return (
    <LayoutAdmin>
      <Grid container justify="center" direction="column" alignItems="center">
        <h2>Navigatie</h2>
        <div>Je hebt nog geen navigatie, voeg je eerste categorie toe!</div>
        <ContentBox>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              id="outlined-basic"
              label="Categorie"
              variant="outlined"
            />
            <Button variant="contained" component="label" color="primary">
              <Add />
              Toevoegen
            </Button>
          </form>
        </ContentBox>
      </Grid>
    </LayoutAdmin>
  );
};

export default Navigation;
