import ModalWrapper from "./ModalWrapper";
import { RESUME_DATA, TECH_SKILLS } from "@/src/lib/resumeData";

export default function ResumeModal() {
  const buildExperienceHeading = (title: string) => {
    return (
      <div className="Container">
        <div className="Border">
          <h3 className="Heading mb-2 border-b border-dotted border-gray-400 text-2xl font-semibold uppercase tracking-wider text-secondaryDark">
            {title}
          </h3>
        </div>
      </div>
    );
  };

  return (
    <ModalWrapper title="Resume">
      <div className="OuterContainer max-w-[800px] items-start pb-4 text-start text-white sm:px-4">
        <h2 className="Name text-gradient-clip mb-1 text-start text-4xl font-bold uppercase">
          Joshua Duncan
        </h2>
        <h2 className="Title mb-6 text-start text-2xl font-medium uppercase text-gray-400">
          Software Engineer
        </h2>
        <div className="TechExperience">
          {buildExperienceHeading("Tech Experience")}
          <div className="SkillsContainer">
            <ul className="Skills flex w-full flex-wrap justify-start gap-2">
              {TECH_SKILLS.map((item) => (
                <li
                  key={item}
                  className="ExperienceItem rounded-sm bg-slate-600/50 p-1 text-xs capitalize text-gray-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="WorkExperience mt-6 flex flex-col justify-start">
          {buildExperienceHeading("Work Experience")}
          <div className="experience-right-container">
            {RESUME_DATA.jobs.map((job) => {
              return (
                <div
                  key={job.name}
                  className="Container mb-4 flex flex-col justify-start"
                >
                  <div className="TitleContainer flex flex-col items-start sm:flex-row sm:items-center sm:gap-2">
                    <p className="Title text-gradient-clip text-xl font-bold capitalize text-white">
                      {job.name}
                    </p>
                    <p className="Time text-sm italic text-gray-500">
                      {job.time}
                    </p>
                  </div>
                  <p className="Position text-lg font-medium capitalize text-gray-300">
                    {job.position}
                  </p>
                  <ul className="Descriptions leading-6 text-gray-400">
                    {job.description.map((item) => (
                      <li key={item} className="ExperienceItem mt-1">
                        {`- ${item}`}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
        <div className="ExperienceContainer">
          {buildExperienceHeading("Education")}
          <div className="EducationContainer flex flex-col gap-4">
            {RESUME_DATA.education.map((item) => {
              return (
                <div key={item.school} className="JobContainer">
                  <div className="TitleContainer flex flex-col items-start sm:flex-row sm:items-center sm:gap-2">
                    <h3 className="SchoolTitle text-gradient-clip text-xl font-bold capitalize text-white">
                      {item.school}
                    </h3>
                    <p className="SchoolTime text-sm italic text-gray-500">
                      {item.time}
                    </p>
                  </div>
                  <p className="SchoolPosition text-lg font-medium capitalize text-gray-300">
                    {item.position}
                  </p>
                  <ul className="Descriptions leading-6 text-gray-400">
                    {item.description.map((item) => (
                      <li key={item} className="ExperienceItem mt-1">
                        {`- ${item}`}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
}
