import React, { useLayoutEffect } from "react";
import Container from "../../components/Container";
import "./style.css";
import { Divider, useTheme } from "@material-ui/core";
import EmailWrapper from "./components/EmailWrapper";
import NavWrapper from "../../components/NavWrapper";
import * as navRoutes from "../../navRoutes";
import { useSpring, animated } from "react-spring";
import { SCREEN_TRANSITION_CONFIG } from "../../globals";
import { useDispatch, useSelector } from "react-redux";
import { fetchAboutMe, selectAboutMe } from "../../slices/appSlice";
import Loading from "../../components/Loading";

export default () => {
  const { palette } = useTheme();
  const dispatch = useDispatch();
  const aboutMe = useSelector(selectAboutMe);
  useLayoutEffect(() => {
    dispatch(fetchAboutMe());
  }, [dispatch]);
  const animationProps = useSpring(SCREEN_TRANSITION_CONFIG);
  if (Boolean(aboutMe)) {
    return (
      <animated.div style={animationProps}>
        <Container>
          <h1>About me</h1>
          <Container>
            <div className="about-me-text">{aboutMe}</div>
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
  } else {
    return <Loading />;
  }
};
