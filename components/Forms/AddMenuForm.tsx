import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

import AddIcon from "@material-ui/icons/Add";

import { Textfield } from "../Textfield";
import { postMenu } from "../../api";

import { toast } from "react-toastify";
import { Button } from "../Button";

export const AddMenuForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (data: any) => {
    postMenu(
      data.categorie,
      (message: string) => {
        toast.success(message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
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
          draggable: true,
          progress: undefined
        });
      }
    );
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Textfield label="categorie" register={register} required={true} />
        <Button color="primary" type="submit">
          <AddIcon />
          Toevoegen
        </Button>
      </Form>
    </div>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
