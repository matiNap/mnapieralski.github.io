import React from "react";
import Container from "../../components/Container";
import SkillCard from "./components/SkillCard";
import data from "./skills.json";
import { useSpring, animated } from "react-spring";

import "./style.css";

export default () => {
  const { skills } = data;
  const animatonProps = useSpring({
    config: { mass: 5, tension: 500, friction: 80 },
    opacity: 1,
    from: { opacity: 0, marginTop: 1000 },
    marginTop: 0,
  });
  return (
    <animated.div style={animatonProps}>
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
