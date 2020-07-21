import React, { useState } from "react";
import { animated, useSpring } from "react-spring";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import { useTheme, IconButton } from "@material-ui/core";
import GalleryStatus from "./GalleryStatus";

interface imageType {
  id: string | number;
  uri: string;
}
interface Props {
  images: imageType[];
}

const IMAGE_WIDTH = 320;

export default ({ images }: Props) => {
  const [currentImage, setCurrentImage] = useState(0);

  const { palette } = useTheme();
  const { x } = useSpring({ x: currentImage });
  const transformX = x
    .interpolate({
      range: images.map((_, index) => index),
      output: images.map((_, index) => IMAGE_WIDTH * index),
    })
    .interpolate((currentX) => `translateX(-${currentX}px)`);
  return (
    <div className="gallery-container">
      <div
        className="project-gallery"
        style={{ width: `${images.length * IMAGE_WIDTH}px` }}
      >
        {images.map((image) => (
          <animated.div
            key={image.id}
            className="gallery-image-container"
            style={{
              backgroundImage: `url(${image.uri})`,
              transform: transformX,
            }}
          />
        ))}
      </div>
      <div className="gallery-controller">
        <IconButton
          onClick={() => {
            if (currentImage > 0) setCurrentImage(currentImage - 1);
          }}
        >
          <GoChevronLeft size={50} color={palette.text.secondary} />
        </IconButton>
        <IconButton
          onClick={() => {
            if (currentImage + 1 < images.length)
              setCurrentImage(currentImage + 1);
          }}
        >
          <GoChevronRight size={50} color={palette.text.secondary} />
        </IconButton>
      </div>
      <GalleryStatus {...{ images, setCurrentImage, currentImage }} />
    </div>
  );
};
