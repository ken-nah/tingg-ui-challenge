import React from "react";

import "./Button.scss";

interface Props {
  children: React.ReactNode;
}

const Button: React.FC<Props> = (props) => {
  return <button className="btn">{props.children}</button>;
};

export default Button;
