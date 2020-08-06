import React from "react";
import "./CSS/Card.css";

export default (props) => {
  return (
    <div className="Card">
      <div className="Header">
        <span className="Title">{props.title}</span>
      </div>
      <div className="Content">{props.children}</div>
    </div>
  );
};
