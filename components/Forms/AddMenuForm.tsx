import React from "react";
import { useForm } from "react-hook-form";

import { Textfield } from "../Textfield";
import { postMenu } from "../../api";

import { toast } from "react-toastify";

export const AddMenuForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    postMenu(
      data.categorie,
      (message: string) => {
        toast.success(message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        });
      },
      (error: string) => {
        toast.error(error, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        });
      }
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Textfield label="categorie" register={register} required={true} />
        <button type="submit">Toevoegen</button>
      </form>
    </div>
  );
};
