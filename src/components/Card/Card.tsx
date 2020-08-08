import React from "react";

import "./Card.scss";

interface Props {
  children: React.ReactNode;
}

const Card: React.FC<Props> = (props) => {
  return <div className="card">{props.children}</div>;
};

export default Card;
