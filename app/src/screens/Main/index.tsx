import React, { useLayoutEffect } from "react";
import Container from "../../components/Container";
import "./style.css";
import { Divider } from "@material-ui/core";
import EmailWrapper from "./components/EmailWrapper";
import { useSpring, animated } from "react-spring";
import { SCREEN_TRANSITION_CONFIG } from "../../globals";
import { useDispatch, useSelector } from "react-redux";
import { fetchAboutMe, selectAboutMe } from "../../slices/appSlice";
import Loading from "../../components/Loading";

export default () => {
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
            </div>
          </Container>
        </Container>
      </animated.div>
    );
  } else {
    return <Loading />;
  }
};
