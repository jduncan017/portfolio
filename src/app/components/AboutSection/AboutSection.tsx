import SectionTitle from "../UI-Elements/SectionTitle";
import Bio from "./Bio";
import Services from "./Services";
import ProfilePicture from "./ProfilePicture";

export const About = () => {
  return (
    <section className="AboutSection h-fit scroll-mt-20" id="about-section">
      <div className="TitleContainer ml-[5%]">
        <SectionTitle title="About Me" />
      </div>
      <div className="OuterContainer mt-4 flex h-full w-full justify-center border-y-4 border-double border-gray-500 bg-gradient-to-br from-black via-gray-900 to-black shadow-secondaryBright">
        <div className="InnerContainer flex w-full max-w-[2500px] flex-col items-center justify-center gap-8 py-8 sm:px-6 md:py-16 lg:flex-row lg:items-start lg:gap-16 lg:text-left xxl:gap-20">
          <div className="LeftContainer mr-5 flex flex-col gap-8 self-start xs:mr-0 xs:w-[75%] xs:items-center  xs:self-center xs:pr-0 lg:h-full lg:w-fit lg:gap-16 lg:self-start">
            <ProfilePicture />
            <div className="ServicesContainerLargeScreens hidden w-full lg:block">
              <Services />
            </div>
          </div>
          <Bio />
          <div className="ServicesContainerSmallScreens mr-5 block max-w-[620px] self-start xs:mr-0 xs:w-[75%] xs:self-center lg:hidden lg:w-full">
            <Services />
          </div>
        </div>
      </div>
    </section>
  );
};
