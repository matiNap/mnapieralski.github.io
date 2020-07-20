import React from "react";
import Container from "../../components/Container";
import "./style.css";
import SkillCard from "./components/SkillCard";
import data from "./skills.json";

export default () => {
  const { skills } = data;
  return (
    <Container>
      <h1>Skills</h1>
      <Container flexDirection="row" justifyContent="space-between">
        <SkillCard title="Technologies:" points={skills.technologies} />
        <SkillCard title="Databases:" points={skills.databases} />
        <SkillCard title="UI/UIX:" points={skills.others} />
        <SkillCard title="Others:" points={skills.ui} />
      </Container>
    </Container>
  );
};
