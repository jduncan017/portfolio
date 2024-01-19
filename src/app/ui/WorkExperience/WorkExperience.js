import React from "react";
import { resumeData } from "@/src/lib/resumeData";
import "./WorkExperience.css";

export const WorkExperience = () => {
  const buildExperienceHeading = (title) => {
    return (
      <div className="experience-heading-box">
        <div className="experience-heading-border">
          <h3 className="experience-heading">{title}</h3>
        </div>
      </div>
    );
  };

  return (
    <section
      id="experience-section"
      className="work-experience-outer-container"
    >
      <div className="experience-container">
        {buildExperienceHeading("Experience")}
        <div className="experience-right-container">
          {resumeData.jobs.map((job) => {
            return (
              <div key={job.name} className="job-container">
                <p className="experience-title">{job.name}</p>
                <i className="experience-position">{job.position}</i>
                <i className="experience-time">{job.time}</i>
                <ul className="description-list">
                  {job.description.map((item) => (
                    <li key={item} className="experience-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="tech-experience-container" id="skills-section">
        {buildExperienceHeading("Technologies")}
        <div className="tech-skills-container">
          <ul className="tech-skills-bullets">
            {resumeData.techSkillz.map((item) => (
              <li key={item} className="experience-item">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="experience-container">
        {buildExperienceHeading("Education")}
        <div className="experience-right-container">
          <h3 className="experience-title">{resumeData.education.school}</h3>
          <i className="experience-position">{resumeData.education.position}</i>
          <i className="experience-time">{resumeData.education.time}</i>
          <ul className="description-list">
            {resumeData.education.description.map((item) => (
              <li key={item} className="experience-item">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
