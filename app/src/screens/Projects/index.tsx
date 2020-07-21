import React from "react";
import Container from "../../components/Container";
import ProjectsGrid from "./components/ProjectsGrid";
import { SCREEN_TRANSITION_CONFIG } from "../../globals";
import { useSpring, animated } from "react-spring";

export default () => {
  const animationProps = useSpring(SCREEN_TRANSITION_CONFIG);
  return (
    <animated.div style={animationProps}>
      <Container>
        <h1>Projects</h1>
        <Container>
          <ProjectsGrid />
        </Container>
      </Container>
    </animated.div>
  );
};
