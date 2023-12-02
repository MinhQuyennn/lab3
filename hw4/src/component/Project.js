// Projects.js
import React from "react";
import styled from "styled-components";
import painter from '../assets/painter.jpg';

const ProjectsWrapper = styled.section`
  padding: 2rem;
  background-color: #f8f9fa;
`;

const ProjectCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin-bottom: 1.5rem;

  h3 {
    margin-bottom: 1rem;
  }
`;

const Projects = () => {
  return (
    <ProjectsWrapper>
      <h2>Projects</h2>
      <ProjectCard>
        <h3>Project Management</h3>
        <p>
        Don't know what to write and am trying to write something long.
        Don't know what to write and am trying to write something long.
        Don't know what to write and am trying to write something long.
        Don't know what to write and am trying to write something long.
        Don't know what to write and am trying to write something long.
        </p>
        <a href="">Link</a>
      </ProjectCard>
    </ProjectsWrapper>
  );
};

export default Projects;
