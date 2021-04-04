import React from "react";
import { useForm } from "react-hook-form";

import { Button } from "@material-ui/core";
import { Add } from "@material-ui/icons";

import { Textfield } from "../Textfield";

export const AddMenuForm = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Textfield label="Categorie" />
        <Button variant="contained" component="label" color="primary">
          <Add />
          Toevoegen
        </Button>
      </form>
    </div>
  );
};
