import React from "react";
import { ImageSectionStyled } from "./styled";
import { user } from "../../data/data";

function ImageSection() {
  return (
    <ImageSectionStyled>
      <div className="left-content">
        <img src={user.photo} alt="" />
      </div>
      <div className="right-content">
        <h4>
          Eu sou <span>{user.firstName}</span>
        </h4>
        <p className="paragraph">
          {user.presentation}
          <br />
          <br />
          {user.objective}
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Nome Completo</p>
            <p>Idade</p>
            <p>Nacionalidade</p>
            <p>Idioma</p>
            <p>Local</p>
          </div>
          <div className="info">
            <p>: {user.firstName} {user.lastName}</p>
            <p>: {user.age}</p>
            <p>: {user.nationality}</p>
            <p>: {user.language}</p>
            <p>: {user.address}</p>
          </div>
        </div>
      </div>
    </ImageSectionStyled>
  );
}

export default ImageSection;
