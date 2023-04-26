import React from "react";
import ProjectItem from "./ProjectItem";



function ProjectList({ projects }) {
  console.log(projects);

  const itemsRendered= projects.map((obj)=>{
    return (
      <ProjectItem name={obj.name} about={obj.about} technologies={obj.technologies} key={obj.id}/>
    )
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{itemsRendered}</div>
    </div>
  );
}

export default ProjectList;
