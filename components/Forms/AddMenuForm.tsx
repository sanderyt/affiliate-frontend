import React from "react";
import styled from "styled-components";
import { postMenu } from "../../api/menu";

import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

import { toast, ToastOptions } from "react-toastify";

import AddIcon from "@material-ui/icons/Add";

import { Textfield } from "../Textfield";
import { Button } from "../Button";

export const AddMenuForm = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const toasterConfig: ToastOptions = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined
  };

  const onSubmit = (data: any) => {
    postMenu(
      data.categorie,
      (successMessage: string) => {
        toast.success(successMessage, toasterConfig);
        refreshData();
      },
      (errorMessage: string) => {
        toast.error(errorMessage, toasterConfig);
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
