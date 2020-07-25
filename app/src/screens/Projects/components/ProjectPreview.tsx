import React from "react";
import { Modal, IconButton } from "@material-ui/core";
import ImageGallery from "./ImageGallery";
import { Project } from "../../../types";
import { animated, useSpring } from "react-spring";
import { GoX } from "react-icons/go";

interface Props {
  selected: Project | null;
  exit: () => void;
}

export default ({ selected, exit }) => {
  const { opacity } = useSpring({
    opacity: Boolean(selected) ? 1 : 0,
    config: {
      duration: 300,
    },
  });
  const opacityTransform = opacity.interpolate({
    range: [0, 1],
    output: [0, 1],
  });

  return (
    <Modal open={selected !== null} className="preview-modal">
      <animated.div
        className="project-preview-container"
        style={{ opacity: opacityTransform }}
      >
        {selected && <ImageGallery images={selected.images} selected />}
        <IconButton onClick={() => exit()} classes={{ root: "preview-exit" }}>
          <GoX color="#fff" size={50} />
        </IconButton>
      </animated.div>
    </Modal>
  );
};
