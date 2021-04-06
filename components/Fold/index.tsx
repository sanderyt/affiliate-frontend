import React, { FC } from "react";

import { StyledFold, Overlay } from "./styles";
import { ContentBox } from "../ContentBox";
import { Textfield } from "../Textfield";
import { Button } from "../Button";
import { useForm } from "react-hook-form";

interface Props {}

export const Fold: FC<Props> = ({}) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <StyledFold
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Overlay />
      <h1>Badkamer123.nl: vind de beste deals voor uw badkamer</h1>
      <ContentBox>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Textfield label="categorie" register={register} required={true} />
          <Button color="primary" type="button">
            Zoeken
          </Button>
        </form>
      </ContentBox>
    </StyledFold>
  );
};
