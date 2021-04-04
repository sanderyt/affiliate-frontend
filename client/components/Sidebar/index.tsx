import React, { FC } from "react";
import Link from "next/link";

import {
  HomeOutlined,
  PublishSharp,
  Navigation,
  Settings
} from "@material-ui/icons";

import { StyledSidebar, SidebarItem } from "./styles";

interface Props {}

export const Sidebar: FC<Props> = ({}) => {
  return (
    <StyledSidebar>
      <Link href="/admin">
        <SidebarItem>
          <HomeOutlined />
          Home
        </SidebarItem>
      </Link>
      <Link href="/admin/upload">
        <SidebarItem>
          <PublishSharp />
          Upload feed
        </SidebarItem>
      </Link>
      <Link href="/admin/navigation">
        <SidebarItem>
          <Navigation />
          Navigation
        </SidebarItem>
      </Link>
      <Link href="/admin/settings">
        <SidebarItem>
          <Settings />
          Settings
        </SidebarItem>
      </Link>
    </StyledSidebar>
  );
};
