import React from "react";
import { ProgressBarStyled } from "./styled";

export default function ProgressBar({ title, width, text }) {
  return (
    <ProgressBarStyled>
      <h6>{title}</h6>
      <div className="progress-bar">
        <p>{text}</p>
        <div className="progress">
          <span style={{ width: width }}></span>
        </div>
      </div>
    </ProgressBarStyled>
  );
}
