import React, { FC } from "react";
import { GetServerSideProps } from "next";

import { Grid } from "@material-ui/core";

import { LayoutAdmin } from "../../components/LayoutAdmin";
import { ContentBox } from "../../components/ContentBox";
import { AddMenuForm } from "../../components/Forms/AddMenuForm";
import { getMenu } from "../../api";

interface Props {
  menuItems: any;
}

const Navigation: FC<Props> = ({ menuItems }) => {
  return (
    <LayoutAdmin>
      <Grid container justify="center" direction="column" alignItems="center">
        <h2>Navigatie</h2>
        <div>Je hebt nog geen navigatie, voeg je eerste categorie toe!</div>
        <ContentBox>
          <AddMenuForm />
        </ContentBox>
        <ContentBox>
          <Grid
            container
            justify="center"
            direction="column"
            alignItems="center"
          >
            <h2>Menu</h2>
            {menuItems &&
              menuItems.map((menuItem: any) => {
                return <span>{menuItem.name}</span>;
              })}
          </Grid>
        </ContentBox>
      </Grid>
    </LayoutAdmin>
  );
};

export default Navigation;

export const getServerSideProps: GetServerSideProps = async () => {
  const menuItems = await getMenu();

  return {
    props: {
      menuItems
    }
  };
};
