import React, { FC, useState } from "react";
import { useRefresh } from "../../hooks/useRefresh";
import { GetServerSideProps } from "next";
import { editMenu, getMenu } from "../../api/menu";

import { Grid } from "@material-ui/core";

import { LayoutAdmin } from "../../components/LayoutAdmin";
import { ContentBox } from "../../components/ContentBox";
import { AddMenuForm } from "../../components/Forms/AddMenuForm";
import { MenuItem } from "../../components/MenuItem";

import Sortly from "react-sortly";

interface Props {
  menuItems: any;
}

const Navigation: FC<Props> = ({ menuItems }) => {
  const [items, setItems] = useState(menuItems);
  const { refreshData } = useRefresh();

  const handleChange = (newItems: any) => {
    setItems(newItems);

    editMenu(
      newItems,
      () => {
        refreshData();
      },
      (errorMessage: string) => {
        console.log(errorMessage, "error");
      }
    );
  };

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
            {items.length > 0 ? (
              <Sortly items={items} onChange={handleChange}>
                {props => <MenuItem {...props} />}
              </Sortly>
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
  const items = await getMenu();
  const menuItems = items.sort((a, b) => a.id - b.id);

  return {
    props: {
      menuItems
    }
  };
};
