import React from "react";

interface Props {
  children: React.ReactNode;
}

const Title: React.FC<Props> = (props) => {
  return <h2>{props.children}</h2>;
};

export default Title;
