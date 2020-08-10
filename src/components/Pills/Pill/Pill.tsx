import React from "react";

import "./Pill.scss";

type Color = "maroon" | "blue" | "yellow" | "powderblue";

interface Props {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  number: string;
  color: Color;
  whiteBackground?: boolean;
}

const Pill: React.FC<Props> = (props) => {
  const { number, color, icon: Icon, title, whiteBackground } = props;

  return (
    <div
      className={`pill pill__${color} ${
        whiteBackground ? "pill__bg-white" : ""
      }`}
    >
      <span>{title}</span>
      <div className="pill__description">
        <div className="pill__description--image">
          <Icon />
        </div>
        <p>{number}</p>
      </div>
    </div>
  );
};

export default Pill;
