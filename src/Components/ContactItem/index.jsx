import React from "react";
import { ContactItemStyled } from "./styled";

export default function ContactItem({ title, icon, content }) {
  return (
    <ContactItemStyled>
      <div className="left-content">{icon}</div>
      <div className="right-content">
        <h6>{title}</h6>
        <p>{content}</p>
      </div>
    </ContactItemStyled>
  );
}
