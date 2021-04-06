import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

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
  const router = useRouter();

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
        refreshData();
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

  const refreshData = () => {
    router.replace(router.asPath);
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
