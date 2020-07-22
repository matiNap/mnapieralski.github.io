import React, { useState } from "react";
import { animated, useSpring } from "react-spring";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import { useTheme, IconButton } from "@material-ui/core";
import GalleryStatus from "./GalleryStatus";
import { ProjectImage } from "../../../types";

interface Props {
  images: ProjectImage[];
  selected?: boolean;
  setSelectedProject?: () => void;
}

const IMAGE_WIDTH = 20;
const IMAGE_WIDTH_SELECTED = 25;

export default ({ images, selected, setSelectedProject }: Props) => {
  const [currentImage, setCurrentImage] = useState(0);
  const imageWidth = selected ? IMAGE_WIDTH_SELECTED : IMAGE_WIDTH;
  const { palette } = useTheme();
  const { x } = useSpring({ x: currentImage });
  const transformX = x
    .interpolate({
      range: images.map((_, index) => index),
      output: images.map((_, index) => imageWidth * index),
    })
    .interpolate((currentX) => `translateX(-${currentX}rem)`);
  const galleryMainContainer = selected
    ? "gallery-main-container gallery-main-container-selected"
    : "gallery-main-container";
  const containerClass = selected
    ? "gallery-container gallery-container-selected"
    : "gallery-container";
  const imageContainerClass = selected
    ? "gallery-image-container gallery-image-container-selected"
    : "gallery-image-container";
  const galleryControllerClass = selected
    ? "gallery-controller gallery-controller-selected"
    : "gallery-controller";
  return (
    <div className={galleryMainContainer}>
      <div
        className={containerClass}
        style={{ cursor: !selected ? "pointer" : "" }}
      >
        <div
          className="project-gallery"
          onClick={() => {
            if (setSelectedProject) setSelectedProject();
          }}
          style={{
            width: `${images.length * imageWidth}rem`,
          }}
        >
          {images.map((image) => (
            <animated.div
              key={image.id}
              className={imageContainerClass}
              style={{
                backgroundImage: `url(${image.uri})`,
                transform: transformX,
                border: selected ? `3px solid ${palette.secondary.light}` : "",
              }}
            />
          ))}
        </div>

        <GalleryStatus
          {...{ images, setCurrentImage, currentImage, selected }}
        />
      </div>
      <div className={galleryControllerClass}>
        <IconButton
          className="gallery-button"
          style={{
            backgroundColor: palette.secondary.light,
          }}
          onClick={() => {
            if (currentImage > 0) setCurrentImage(currentImage - 1);
          }}
        >
          <GoChevronLeft size={50} color={palette.text.primary} />
        </IconButton>
        <IconButton
          className="gallery-button"
          style={{
            backgroundColor: palette.secondary.light,
          }}
          onClick={() => {
            if (currentImage + 1 < images.length)
              setCurrentImage(currentImage + 1);
          }}
        >
          <GoChevronRight size={50} color={palette.text.primary} />
        </IconButton>
      </div>
    </div>
  );
};
