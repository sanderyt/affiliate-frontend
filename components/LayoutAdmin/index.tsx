import React, { ReactNode, FC } from "react";
import { Grid, Box } from "@material-ui/core";

import { Sidebar } from "../Sidebar";

import { ActionsBar } from "./styles";
import { Button } from "../Button";

interface Props {
  children: ReactNode;
}

export const LayoutAdmin: FC<Props> = ({ children }) => {
  return (
    <Grid container>
      <Grid item md={2} xs={12}>
        <Sidebar />
      </Grid>
      <Grid item md={10} xs={12}>
        <ActionsBar display="flex" justifyContent="flex-end">
          <Button color="primary" type="button">
            Logout
          </Button>
        </ActionsBar>
        <Box display="flex" alignItems="center" justifyContent="center">
          {children}
        </Box>
      </Grid>
    </Grid>
  );
};
