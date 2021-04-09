import React, { FC, useContext } from "react";
import { MenuContext } from "../../context/MenuContext";
import Link from "next/link";

import { StyledNavigation, NavigationList, NavigationItem } from "./styles";

interface Props {}

export const Navigation: FC<Props> = ({}) => {
  const { menuItems } = useContext(MenuContext);

  return (
    <StyledNavigation
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <NavigationList>
        {menuItems &&
          menuItems.map((menuItem: any) => {
            if (menuItem.depth === 0) {
              return (
                <Link href={`/category/${menuItem.slug}`}>
                  <NavigationItem key={menuItem.name}>
                    {menuItem.name}
                  </NavigationItem>
                </Link>
              );
            }
          })}
      </NavigationList>
    </StyledNavigation>
  );
};
