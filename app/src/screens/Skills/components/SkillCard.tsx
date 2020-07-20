import React, { ReactNode } from "react";
import Card from "../../../components/Card";
import ListPoint from "./ListPoint";

interface Props {
  children?: ReactNode | ReactNode[];
  title: string;
  points: string[];
}

export default ({ children, title, points }: Props) => {
  return (
    <Card className="skills-card">
      <h2>{title}</h2>
      <ul>
        {points.map((point) => (
          <ListPoint title={point} />
        ))}
      </ul>
    </Card>
  );
};
