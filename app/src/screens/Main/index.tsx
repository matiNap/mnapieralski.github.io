import React from "react";
import Container from "../../components/Container";
import "./style.css";
import { Divider, useTheme } from "@material-ui/core";
import EmailWrapper from "./components/EmailWrapper";
import NavWrapper from "../../components/NavWrapper";
import * as navRoutes from "../../navRoutes";
import { useSpring, animated } from "react-spring";
import { SCREEN_TRANSITION_CONFIG } from "../../globals";

export default () => {
  const { palette } = useTheme();
  const animationProps = useSpring(SCREEN_TRANSITION_CONFIG);
  return (
    <animated.div style={animationProps}>
      <Container>
        <h1>About me</h1>
        <Container>
          <div className="about-me-text">
            I am 2 years experienced full stack developer with 3 years
            experience of React and 2 years experience of React Native. I am
            experienced in creating minimal viuable products and leading small
            teams. To applications I also use Firebase and for backend I like
            use GrpahQL(TypeGrpahql, TypeORM). I like work with team, creating
            challenging projects and solving problems. I can think critically
            and admit a mistake if I have commited it.
          </div>
          <Divider
            variant="middle"
            classes={{ root: "content-divider public-divider" }}
            component="div"
          />
        </Container>
      </Container>
      <Container>
        <h1>Contact with me</h1>
        <Container>
          <div className="contact-info">
            <p className="contact-text">Via mail</p>
            <EmailWrapper />
            <p className="contact-or">or</p>
            <div className="contact-chat-container">
              <p className="contact-text">Text me</p>
              <NavWrapper to={navRoutes.CHAT}>
                <p
                  className="contact-chat-link contact-text"
                  style={{ color: palette.primary.main }}
                >
                  here
                </p>
              </NavWrapper>
            </div>
          </div>
        </Container>
      </Container>
    </animated.div>
  );
};