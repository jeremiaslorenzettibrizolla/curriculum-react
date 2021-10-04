/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { MainLayout, InnerLayout } from "../../styles/Layouts";
import Title from "../../Components/Title";
import { user } from "../../data/data";
import Menu from "../../Components/Menu";
import Button from "../../Components/Button";

export default function Projects() {
  const [menuItem, setMenuItems] = useState(user.projects);
  return (
    <MainLayout>
      <Title title={"Projetos"} span={"Projetos"} />
      <InnerLayout>
        <Menu menuItem={menuItem} />
      </InnerLayout>
    </MainLayout>
  );
}
