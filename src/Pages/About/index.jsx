import React from "react";
import ImageSection from "../../Components/ImageSection";
import Title from "../../Components/Title";
import { MainLayout } from "../../styles/Layouts";
import { AboutStyled } from "./styled";

export default function About() {
  return (
    <MainLayout>
      <AboutStyled>
        <Title title={"Sobre"} span={"Sobre"} />
        <ImageSection />
      </AboutStyled>
    </MainLayout>
  );
}
