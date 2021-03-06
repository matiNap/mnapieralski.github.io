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
      <h2 className="skills-header">{title}</h2>
      <ul className="skills-list">
        {points.map((point) => (
          <ListPoint title={point} key={point} />
        ))}
      </ul>
    </Card>
  );
};
