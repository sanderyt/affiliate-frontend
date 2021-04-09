import React from "react";
import { useForm } from "react-hook-form";

import { Textfield } from "../../components/Textfield";
import { ContentBox } from "../../components/ContentBox";
import { Button } from "../../components/Button";

import { Box } from "@material-ui/core";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      flexDirection="column"
    >
      <h1>Login admin</h1>
      <ContentBox>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Textfield label="Email" register={register} required={true} />
          <Textfield label="Wachtwoord" register={register} required={true} />
          <Button color="primary" type="submit">
            Inloggen
          </Button>
        </form>
      </ContentBox>
    </Box>
  );
};

export default Login;
