import React, { FC } from "react";

import { TextfieldWrapper, Label, StyledTextfield } from "./styles";

type RefReturn =
  | string
  | ((instance: HTMLInputElement | null) => void)
  | React.RefObject<HTMLInputElement>
  | null
  | undefined;

interface Props {
  label: string;
  register?: () => RefReturn;
}

export const Textfield: FC<Props> = ({ label, register }) => {
  return (
    <TextfieldWrapper>
      <Label>{label}</Label>
      <StyledTextfield type="text" ref={register} name={label} />
    </TextfieldWrapper>
  );
};
