/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { InnerLayout } from "../../styles/Layouts";
import Title from "../Title";
import ProgressBar from "../ProgressBar";
import { SkillsStyled } from "./styled";
import { user } from "../../data/data";

export default function Skills() {
  const [skills, setSkills] = useState(user.skills);
  return (
    <SkillsStyled>
      <Title title={"Habilidades"} span={"Habilidades"} />
      <InnerLayout>
        <div className="skills">
          {skills.map(({ id, name, level }) => {
            return (
              <ProgressBar key={id} title={name} width={level} text={level} />
            );
          })}
        </div>
      </InnerLayout>
    </SkillsStyled>
  );
}
