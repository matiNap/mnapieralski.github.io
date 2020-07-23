import React, { useLayoutEffect } from "react";
import Container from "../../components/Container";
import SkillCard from "./components/SkillCard";
import { useSpring, animated } from "react-spring";
import { SCREEN_TRANSITION_CONFIG } from "../../globals";

import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { selectSkills, fetchSkills } from "../../slices/appSlice";
import Loading from "../../components/Loading";

export default () => {
  const skills = useSelector(selectSkills);
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    dispatch(fetchSkills());
  }, [dispatch]);
  const animationProps = useSpring(SCREEN_TRANSITION_CONFIG);

  if (
    skills &&
    skills.technologies &&
    skills.others &&
    skills.databases &&
    skills.ui
  ) {
    const { technologies, others, databases, ui } = skills;
    return (
      <animated.div style={animationProps}>
        <Container>
          <h1>Skills</h1>
          <Container className="skills-container">
            <SkillCard title="Technologies:" points={technologies} />
            <SkillCard title="Databases:" points={databases} />
            <SkillCard title="UI/UIX:" points={ui} />
            <SkillCard title="Others:" points={others} />
          </Container>
        </Container>
      </animated.div>
    );
  } else return <Loading />;
};
