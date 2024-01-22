import React from "react";
import Link from "next/link";
import { projectData } from "@/src/lib/projectData";
import Image from "next/image";
import "./Projects.css";

export const Projects = () => {
  return (
    <section id="projects-section" className="projects-outer-container">
      {projectData.map((project) => {
        return (
          <div key={project.name} className="project-container">
            <Link
              rel="noopener noreferrer"
              tabIndex="-1"
              aria-label="live project"
              href={project.liveLink}
              target="_blank"
            >
              <Image
                className="project__site-preview"
                src={project.previewPath}
                alt="Screenshot of project"
                width={300}
                height={190}
              />
            </Link>
            <div className="project-info">
              <h3 className="project-title">{project.name}</h3>
              <i className="project-techs">{project.techsUsed}</i>
              <p className="project-description">{project.description}</p>
              <div className="project-buttons-container">
                <Link
                  rel="noopener noreferrer"
                  tabIndex="-1"
                  aria-label="live project"
                  href={project.liveLink}
                  target="_blank"
                >
                  <button className="project-button global__button">
                    {project.liveButtonText}
                  </button>
                </Link>
                <Link
                  rel="noopener noreferrer"
                  tabIndex="-1"
                  aria-label="github project repo"
                  href={project.repoURL}
                  target="_blank"
                >
                  <button className="project-button global__button">
                    GitHub Repo
                  </button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};
