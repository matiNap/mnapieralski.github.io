import React from "react";

interface Props {
  title: string;
}

export default ({ title }: Props) => {
  return <li className="drawer-item">{title}</li>;
};
