import React, { useState, useLayoutEffect } from "react";
import ProjectTile from "./ProjectTile";
import "../style.css";
import ProjectPreview from "./ProjectPreview";
import { useSelector, useDispatch } from "react-redux";
import { selectProjects, fetchProjects } from "../../../slices/appSlice";
import Loading from "../../../components/Loading";

export default () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);
  const projects = useSelector(selectProjects);
  if (projects) {
    return (
      <div className="projects-grid">
        {[...projects].map((current) => (
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
  } else return <Loading />;
};
