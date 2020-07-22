import React from "react";
import Card from "../../../components/Card";
import ImageGallery from "./ImageGallery";
import { IoLogoGithub } from "react-icons/io";
import { GoDeviceMobile, GoHome } from "react-icons/go";
import ProjectLink from "./ProjectLink";
import { Project } from "../../../types";

interface Props {
  project: Project;
  setSelectedProject: (project: any) => void;
}

export default ({ project, setSelectedProject }: Props) => {
  const { title, description, github, store, emulator, images } = project;
  return (
    <Card className="project-tile-card">
      <ImageGallery
        {...{ images }}
        setSelectedProject={() => setSelectedProject(project)}
      />

      <h2 className="project-title" onClick={() => setSelectedProject(project)}>
        {title}
      </h2>
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
