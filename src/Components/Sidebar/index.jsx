import React from "react";
import Navigation from "../Navigation";
import { SidebarStyled } from "./styled";

export default function Sidebar({ navToggle }) {
  return (
    <SidebarStyled className={`${navToggle ? "nav-toggle" : ""}`}>
      <Navigation />
    </SidebarStyled>
  );
}
