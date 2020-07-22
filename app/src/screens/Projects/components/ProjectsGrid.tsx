import React, { useState } from "react";
import ProjectTile from "./ProjectTile";
import "../style.css";
import ProjectPreview from "./ProjectPreview";

const data = [
  {
    id: "1",
    title: "Workout timer",
    github: "https://github.comhttps://github.comhttps://github.com",
    store: "https://g.apps.com",
    emulator: "https://emulator.com",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec felis sit amet eros semper consequat quis vel urna. Donec tellus mauris Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec felis sit amet eros semper consequat quis vel urna. Donec tellus mauris,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec felis sit amet eros semper consequat quis vel urna. Donec tellus mauris,",
    images: [
      {
        id: 1,
        uri: `${process.env.PUBLIC_URL}/timer.gif`,
      },
      {
        id: 2,
        uri: `${process.env.PUBLIC_URL}/edit.jpg`,
      },
    ],
  },
  {
    id: "2",
    title: "Workout timer",
    github: "https://github.com",
    store: "https://g.apps.com",
    emulator: "https://emulator.com",
    description: "Description",
    images: [
      {
        id: 1,
        uri: `${process.env.PUBLIC_URL}/timer.gif`,
      },
      {
        id: 2,
        uri: `${process.env.PUBLIC_URL}/edit.jpg`,
      },
    ],
  },
  {
    id: "3",
    title: "Workout timer",
    github: "https://github.com",
    store: "https://g.apps.com",
    emulator: "https://emulator.com",
    description: "Description",
    images: [
      {
        id: 1,
        uri: `${process.env.PUBLIC_URL}/timer.gif`,
      },
      {
        id: 2,
        uri: `${process.env.PUBLIC_URL}/edit.jpg`,
      },
    ],
  },
];

export default () => {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <div className="projects-grid">
      {data.map((current) => (
        <ProjectTile
          key={`project${current.id}`}
          project={current}
          {...{ setSelectedProject }}
        />
      ))}
      <ProjectPreview
        selected={selectedProject}
        exit={() => setSelectedProject(null)}
      />
    </div>
  );
};
