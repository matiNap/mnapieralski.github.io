import React from "react";
import Container from "../../components/Container";
import { useTheme, Button } from "@material-ui/core";
import { FiHome, FiChevronLeft } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import "./style.css";
import { MAIN } from "../../navRoutes";

export default () => {
  const { palette } = useTheme();
  const history = useHistory();

  return (
    <Container>
      <div className="nf-centered">
        <p className="nf-title">404</p>
        <h1 style={{ color: palette.primary.main }} className="nf-subtitle">
          Oops.. Page not found
        </h1>
        <div className="nf-nav">
          <Button
            onClick={() => {
              history.push(MAIN);
            }}
            className="nf-button"
            startIcon={<FiHome />}
            color="primary"
            variant="contained"
          >
            Home
          </Button>
          <Button
            onClick={() => {
              history.goBack();
            }}
            className="nf-button"
            startIcon={<FiChevronLeft />}
            color="primary"
            variant="contained"
          >
            Previous page
          </Button>
        </div>
      </div>
    </Container>
  );
};
