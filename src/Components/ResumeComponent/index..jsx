/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { InnerLayout } from "../../styles/Layouts";
import Title from "../Title";
import SmallTitle from "../SmallTitle";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import SchoolIcon from "@material-ui/icons/School";
import ResumeItem from "../ResumeItem";
import { ResumeComponentStyled } from "./styled";
import { user } from "../../data/data";

export default function ResumeComponent() {
  const briefcase = <BusinessCenterIcon />;
  const school = <SchoolIcon />;
  const [working, setWorking] = useState(user.workingExperience);
  const [education, setEducation] = useState(user.educationalQualifications);
  return (
    <ResumeComponentStyled>
      <Title title={"Resumo"} span={"Resumo"} />
      <InnerLayout>
        <div className="small-title">
          <SmallTitle icon={briefcase} title={"Experiência de Trabalho"} />
        </div>
        <div className="resume-content">
          {working.map(
            ({ id, experiencePeriod, company, occupation, description }) => {
              return (
                <ResumeItem
                  key={id}
                  year={experiencePeriod}
                  title={occupation}
                  subTitle={company}
                  text={description}
                />
              );
            }
          )}
        </div>
        <div className="small-title u-small-title-margin">
          <SmallTitle icon={school} title={"Qualificações Educacionais"} />
        </div>
        <div className="resume-content">
          {education.map(
            ({ id, course, description, durationPeriod, school }) => {
              return (
                <ResumeItem
                  key={id}
                  year={durationPeriod}
                  title={course}
                  subTitle={school}
                  text={description}
                />
              );
            }
          )}
        </div>
      </InnerLayout>
    </ResumeComponentStyled>
  );
}
