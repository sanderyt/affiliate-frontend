import React, { ReactNode, FC } from "react";
import { Grid, Box } from "@material-ui/core";
import { Sidebar } from "../Sidebar";

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
        <Box display="flex" alignItems="center" justifyContent="center">
          {children}
        </Box>
      </Grid>
    </Grid>
  );
};
