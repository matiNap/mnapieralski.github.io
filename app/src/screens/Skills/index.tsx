import React from "react";
import Container from "../../components/Container";
import SkillCard from "./components/SkillCard";
import data from "./skills.json";
import { useSpring, animated } from "react-spring";
import { SCREEN_TRANSITION_CONFIG } from "../../globals";

import "./style.css";

export default () => {
  const { skills } = data;
  const animationProps = useSpring(SCREEN_TRANSITION_CONFIG);
  return (
    <animated.div style={animationProps}>
      <Container>
        <h1>Skills</h1>
        <Container className="skills-container">
          <SkillCard title="Technologies:" points={skills.technologies} />
          <SkillCard title="Databases:" points={skills.databases} />
          <SkillCard title="UI/UIX:" points={skills.others} />
          <SkillCard title="Others:" points={skills.ui} />
        </Container>
      </Container>
    </animated.div>
  );
};
