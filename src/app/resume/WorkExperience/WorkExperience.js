// import React from "react";
// import { RESUME_DATA } from "@/src/lib/resumeData";
// import "./WorkExperience.css";

// export const WorkExperience = () => {
//   const buildExperienceHeading = (title) => {
//     return (
//       <div className="experience-heading-box">
//         <div className="experience-heading-border">
//           <h3 className="experience-heading">{title}</h3>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <section
//       id="experience-section"
//       className="work-experience-outer-container"
//     >
//       <div className="experience-container">
//         {buildExperienceHeading("Experience")}
//         <div className="experience-right-container">
//           {RESUME_DATA.jobs.map((job) => {
//             return (
//               <div key={job.name} className="job-container">
//                 <p className="experience-title">{job.name}</p>
//                 <i className="experience-position">{job.position}</i>
//                 <i className="experience-time">{job.time}</i>
//                 <ul className="description-list">
//                   {job.description.map((item) => (
//                     <li key={item} className="experience-item">
//                       {item}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//       <div className="tech-experience-container" id="skills-section">
//         {buildExperienceHeading("Technologies")}
//         <div className="tech-skills-container">
//           <ul className="tech-skills-bullets">
//             {RESUME_DATA.techSkillz.map((item) => (
//               <li key={item} className="experience-item">
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//       <div className="experience-container">
//         {buildExperienceHeading("Education")}
//         <div className="experience-right-container">
//           {RESUME_DATA.education.map((item) => {
//             return (
//               <div key={item.school} className="job-container">
//                 <h3 className="experience-title">{item.school}</h3>
//                 <i className="experience-position">{item.position}</i>
//                 <i className="experience-time">{item.time}</i>
//                 <ul className="description-list">
//                   {item.description.map((item) => (
//                     <li key={item} className="experience-item">
//                       {item}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };
