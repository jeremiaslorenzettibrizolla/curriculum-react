import React from "react";
import { InnerLayout } from "../../styles/Layouts";
import Title from "../Title";
import ServiceCard from "../ServiceCard";
import design from "../../img/design.svg";
import intelligence from "../../img/intelligence.svg";
import gamedev from "../../img/game-dev.svg";
import { ServicesSectionStyled } from "./styled";

export default function ServicesSection() {
  return (
    <InnerLayout>
      <ServicesSectionStyled>
        <Title title={"Services"} span={"services"} />
        <div className="services">
          <ServiceCard
            image={design}
            title={"Web Design"}
            paragraph={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."
            }
          />
          <div className="mid-card">
            <ServiceCard
              image={intelligence}
              title={"Artificial Intelligence"}
              paragraph={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."
              }
            />
          </div>
          <ServiceCard
            image={gamedev}
            title={"Game Development"}
            paragraph={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."
            }
          />
        </div>
      </ServicesSectionStyled>
    </InnerLayout>
  );
}
