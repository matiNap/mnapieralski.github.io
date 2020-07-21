import React from "react";
import ProjectTile from "./ProjectTile";
import "../style.css";

const data = [
  {
    id: "1",
    title: "Workout timer",
    github: "https://github.comhttps://github.comhttps://github.com",
    store: "https://g.apps.com",
    emulator: "https://emulator.com",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec felis sit amet eros semper consequat quis vel urna. Donec tellus mauris Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec felis sit amet eros semper consequat quis vel urna. Donec tellus mauris,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec felis sit amet eros semper consequat quis vel urna. Donec tellus mauris,",
  },
  {
    id: "2",
    title: "Workout timer",
    github: "https://github.com",
    store: "https://g.apps.com",
    emulator: "https://emulator.com",
    description: "Description",
  },
  {
    id: "3",
    title: "Workout timer",
    github: "https://github.com",
    store: "https://g.apps.com",
    emulator: "https://emulator.com",
    description: "Description",
  },
];

export default () => {
  return (
    <div className="projects-grid">
      {data.map((current) => (
        <ProjectTile key={`project${current.id}`} project={current} />
      ))}
    </div>
  );
};
