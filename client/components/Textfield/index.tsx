import React, { FC } from "react";
import { UseFormRegister } from "react-hook-form";

import { TextfieldWrapper, Label, StyledTextfield } from "./styles";

interface IFormValues {
  [key: string]: string;
}

interface Props {
  label: string;
  register: UseFormRegister<IFormValues>;
  required: boolean;
}

export const Textfield: FC<Props> = ({ label, required, register }) => {
  return (
    <TextfieldWrapper>
      <Label>{label}</Label>
      <StyledTextfield type="text" {...register(label, { required })} />
    </TextfieldWrapper>
  );
};
