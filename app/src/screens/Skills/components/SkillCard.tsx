import React, { ReactNode } from "react";
import Card from "../../../components/Card";

interface Props {
  children?: ReactNode | ReactNode[];
  title: string;
  points: string[];
}

export default ({ children, title, points }: Props) => {
  return (
    <Card containerStyle={{ width: "20rem", height: "40rem" }}>
      <h2>{title}</h2>
      <ul>
        {points.map((point) => (
          <li>{point}</li>
        ))}
      </ul>
    </Card>
  );
};
