import React from "react";
import Skills from "../../Components/Skills";
import { MainLayout } from "../../styles/Layouts";
import ResumeItem from "../../Components/ResumeComponent/index.";

export default function Resume() {
  return (
    <MainLayout>
      <Skills />
      <ResumeItem />
    </MainLayout>
  );
}
