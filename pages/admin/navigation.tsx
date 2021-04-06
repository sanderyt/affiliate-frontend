import React, { FC } from "react";
import { GetServerSideProps } from "next";
import { getMenu } from "../../api";

import { Grid } from "@material-ui/core";

import { LayoutAdmin } from "../../components/LayoutAdmin";
import { ContentBox } from "../../components/ContentBox";
import { AddMenuForm } from "../../components/Forms/AddMenuForm";
import { MenuItem } from "../../components/MenuItem";

interface Props {
  menuItems: any;
}

const Navigation: FC<Props> = ({ menuItems }) => {
  return (
    <LayoutAdmin>
      <Grid container justify="center" direction="column" alignItems="center">
        <h2>Categorieen</h2>
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
            {menuItems.length > 0 ? (
              menuItems.map((menuItem: any) => {
                return <MenuItem name={menuItem.name} slug={menuItem.slug} />;
              })
            ) : (
              <span>Je hebt nog geen menu items. Voeg een categorie toe.</span>
            )}
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
