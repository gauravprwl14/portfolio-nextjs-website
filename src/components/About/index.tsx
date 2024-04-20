import { Skill } from "@/lib/types";
import { ABOUT_US } from "@/lib/utils";

export const AboutUs = () => {
  return (
    <div className="process-section h-auto w-full float-left clear-both mx-auto px-4 lg:px-10 bg-whiteLilac-100">
      {/*  py-20 */}
      <div className="w-full h-auto mx-auto max-w-screen-2xl mt-5 lg:mt-10 ">
        <div className="justify-center items-center flex w-full mb-8">
          <div className="relative text-2xl lg:text-4xl py-2 font-bold font-jost text-blue-600">
            {" "}
            About me
            <div className="bg-black h-1 absolute bottom-0 lg:-bottom-2 left-1/2 transform -translate-x-1/2 w-1/2 rounded-md"></div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row my-10">
          <div className="lg:basis-1/3 flex flex-col justify-center">
            <div className="font-jost text-8xl flex flex-row mb-6 lg:mb-12 items-center justify-center font-bold">
              <div className="px-2">{ABOUT_US.experience}</div>
              <div className="-mt-2">+</div>
            </div>
            <div className="text-4xl items-center justify-center flex flex-col">
              <div className="text-left">
                <div className="py-2">Years</div>
                <div>Working</div>
                <div>Experience</div>
              </div>
            </div>
          </div>
          <div className="lg:basis-2/3 my-6 lg:my-2">
            {/* <div> {ABOUT_US.bio}</div> */}

            <div className="text-xl">
              {ABOUT_US.bio.paragraphs.map((paragraph, index) => (
                <p key={index} className="py-2">
                  {paragraph.text.map((part, partIndex) => (
                    <span
                      key={partIndex}
                      style={{
                        fontWeight: part.highlight ? "normal" : "normal",
                      }}
                    >
                      {part.content}
                    </span>
                  ))}
                </p>
              ))}
            </div>

            <div className="text-xl my-5 text-gray-700 font-jost font-bold">
              {" "}
              {ABOUT_US.email}
            </div>

            <div className="flex lg:flex-row flex-col -ml-2 my-2">
              {" "}
              {ABOUT_US.skills.map((skill: Skill, index: number) => {
                return (
                  <Card
                    key={index}
                    icon={skill.icon}
                    title={skill.title}
                    description={skill.description}
                  />
                );
              })}{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = ({ icon, title, description }: Skill) => {
  return (
    <div className="max-w-sm rounded overflow-hidden mb-6 w-full pl-6">
      <div className="relative text-center bg-white rounded-lg shadow-lg w-full px-5 py-10 h-full clear ">
        <div className="flex items-center justify-center">
          <img src={icon} alt="Skill Icon" className="w-12 h-12" />
        </div>
        <div className=" mt-5 text-2xl font-semibold"> {title}</div>
        <div className="text-xl my-5 text-gray-700 font-jost text-center">
          {" "}
          <h3>{description}</h3>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
