import React from "react";

import "./Button.scss";

interface Props {
  children: React.ReactNode;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}

const Button: React.FC<Props> = (props) => {
  const { icon: Icon } = props;

  return (
    <button className="btn">
      {Icon && <Icon />}
      {props.children}
    </button>
  );
};

export default Button;
