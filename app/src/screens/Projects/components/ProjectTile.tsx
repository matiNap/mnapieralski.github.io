import React from "react";
import Card from "../../../components/Card";
import ImageGallery from "./ImageGallery";
import { IoLogoGithub } from "react-icons/io";
import { GoDeviceMobile, GoHome } from "react-icons/go";
import ProjectLink from "./ProjectLink";

interface Props {
  project: {
    title: string;
    description: string;
    github: string;
    store: string;
    emulator: string;
  };
}

export default ({
  project: { title, description, github, store, emulator },
}: Props) => {
  return (
    <Card className="project-tile-card">
      <ImageGallery
        images={[
          {
            id: 1,
            uri: `${process.env.PUBLIC_URL}/timer.gif`,
          },
          {
            id: 2,
            uri: `${process.env.PUBLIC_URL}/edit.jpg`,
          },
        ]}
      />

      <h2 className="project-title">{title}</h2>
      <div className="project-description">{description}</div>
      <div className="project-source-links">
        <ProjectLink
          link={github}
          renderIcon={(iconProps) => <IoLogoGithub {...iconProps} />}
        />
        {emulator && (
          <ProjectLink
            link={emulator}
            renderIcon={(iconProps) => <GoDeviceMobile {...iconProps} />}
          />
        )}
        {store && (
          <ProjectLink
            link={store}
            renderIcon={(iconProps) => <GoHome {...iconProps} />}
          />
        )}
      </div>
    </Card>
  );
};
