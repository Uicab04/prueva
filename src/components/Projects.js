
import React from 'react';

const Project = ({ title, description, link }) => (
  <div className="project">
    <h3 className="project__title">{title}</h3>
    <p className="project__description">{description}</p>
    <a href={link} target="_blank" rel="noopener noreferrer" className="project__link">Ver Proyecto</a>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "Proyecto 1",
      description: "Descripción breve del proyecto 1.",
      link: "https://enlace-a-proyecto1.com"
    },
    {
      title: "Proyecto 2",
      description: "Descripción breve del proyecto 2.",
      link: "https://enlace-a-proyecto2.com"
    },
    {
      title: "Proyecto 3",
      description: "Descripción breve del proyecto 3.",
      link: "https://enlace-a-proyecto3.com"
    },
  ];

  return (
    <section id="proyectos" className="section">
      <h2 className="section__title">Proyectos Realizados</h2>
      <div className="section__content">
        {projects.map((project, index) => (
          <Project key={index} title={project.title} description={project.description} link={project.link} />
        ))}
      </div>
    </section>
  );
};

export default Projects;