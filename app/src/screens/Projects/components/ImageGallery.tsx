import React, { useState } from "react";
import { animated, useSpring } from "react-spring";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import { useTheme, IconButton } from "@material-ui/core";
import GalleryStatus from "./GalleryStatus";

interface Props {
  images: string[];
  selected?: boolean;
  setSelectedProject?: () => void;
}

export default ({ images, selected, setSelectedProject }: Props) => {
  const [currentImage, setCurrentImage] = useState(0);
  const { palette } = useTheme();

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
    <div className="gallery-selected">
      <div className={galleryMainContainer}>
        <div
          className={containerClass}
          style={{ cursor: !selected ? "pointer" : "" }}
          onClick={() => {
            if (setSelectedProject) setSelectedProject();
          }}
        >
          <div className="project-gallery">
            {images.map((image, index) => {
              const { x } = useSpring({ x: currentImage === index ? 1 : 0 });
              const opacityValue = x.interpolate({
                range: [0, 1],
                output: [0, 1],
              });
              return (
                <animated.div
                  key={image}
                  className={imageContainerClass}
                  style={{
                    backgroundImage: `url(${image})`,
                    opacity: opacityValue,
                  }}
                />
              );
            })}
          </div>
        </div>

        <div className={galleryControllerClass}>
          <IconButton
            className="gallery-button"
            style={{
              backgroundColor: palette.secondary.light,
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={() => {
              if (currentImage > 0) setCurrentImage(currentImage - 1);
            }}
            classes={{ label: "switch-icon" }}
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
      <GalleryStatus {...{ images, setCurrentImage, currentImage, selected }} />
    </div>
  );
};
