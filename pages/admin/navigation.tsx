import React, { FC } from "react";
import { GetServerSideProps } from "next";
import { getMenu } from "../../api";

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
  const [items, setItems] = React.useState([
    {
      id: 1,
      name: "Priscilla Cormier",
      depth: 0,
      index: 0,
      slug: "priscilla-cormier"
    },
    {
      id: 2,
      name: "Miss Erich Bartoletti",
      depth: 0,
      index: 1,
      slug: "miss-erich-bartoletti"
    },
    {
      id: 3,
      name: "Alison Friesen",
      depth: 0,
      index: 2,
      slug: "alison-friesen"
    },
    {
      id: 4,
      name: "Bernita Mayert",
      depth: 0,
      index: 3,
      slug: "bernita-mayert"
    },
    {
      id: 5,
      name: "Garfield Berge",
      depth: 0,
      index: 4,
      slug: "garfield-berge"
    }
  ]);

  const handleChange = (newItems: any) => {
    setItems(newItems);
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
            {/* <h2>Menu</h2>
            {menuItems.length > 0 ? (
              menuItems.map((menuItem: any) => {
                return <MenuItem name={menuItem.name} slug={menuItem.slug} />;
              })
            ) : (
              <span>Je hebt nog geen menu items. Voeg een categorie toe.</span>
            )} */}

            <Sortly items={items} onChange={handleChange}>
              {props => <MenuItem {...props} />}
            </Sortly>
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
