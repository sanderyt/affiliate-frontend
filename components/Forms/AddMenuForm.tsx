import React from "react";
import { useForm } from "react-hook-form";

import { Textfield } from "../Textfield";

export const AddMenuForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Textfield label="Categorie" register={register} required={true} />
        <button type="submit">Toevoegen</button>
      </form>
    </div>
  );
};
