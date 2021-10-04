import React from "react";
import { NavLink } from "react-router-dom";
import avatar from "../../img/avatar.jpg";
import { NavigationStyled } from "./styled";

function Navigation() {
  return (
    <NavigationStyled>
      <div className="avatar">
        <img src={avatar} alt="" />
      </div>
      <ul className="nav-items">
        <li className="nav-item">
          <NavLink to="/" activeClassName="active-class" exact>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" activeClassName="active-class" exact>
            Sobre
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/resume" activeClassName="active-class" exact>
            Resumo
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/projects" activeClassName="active-class" exact>
            Projetos
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" activeClassName="active-class" exact>
            Contato
          </NavLink>
        </li>
      </ul>
      <footer className="footer">
        <p>
          @2021 <b>Aluno da Growdev</b>
        </p>
      </footer>
    </NavigationStyled>
  );
}

export default Navigation;
