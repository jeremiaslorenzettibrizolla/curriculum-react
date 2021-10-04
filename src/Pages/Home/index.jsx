import React from "react";
import LinkedinIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import WhatsappIcon from "@material-ui/icons/WhatsApp";
import Particle from "../../Components/Particle";
import { HomeStyled } from "./styled";
import { user } from "../../data/data";

export default function Home() {
  return (
    <HomeStyled>
      <div className="particle-con">
        <Particle />
      </div>
      <div className="typography">
        <h1>
          <span>{user.firstName}</span>
        </h1>
        <h4>
          <span>{user.profession}</span>
        </h4>
        <p>
          focado em desenvolver soluções em tecnologias modernas e de alta
          performance, atualmente com foco em Node JS e React JS.
        </p>
        <div className="icons">
          <a href={user.linkedin} className="icon i-linkedin">
            <LinkedinIcon />
          </a>
          <a href={user.github} className="icon i-github">
            <GithubIcon />
          </a>
          <a href={user.whatsapp} className="icon i-whatsapp">
            <WhatsappIcon />
          </a>
        </div>
      </div>
    </HomeStyled>
  );
}
