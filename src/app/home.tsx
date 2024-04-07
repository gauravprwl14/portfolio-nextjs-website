import React from "react";

import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const USER_OBJ = {
  name: "Gaurav Porwal",
  designation: "Fullstack Developer",
  description:
    "Collaborating with highly skilled individuals, our agency delivers top-quality services.",
  img: "/img/slider/avatar.png",
  social: [
    {
      name: "linkedin",
      icon: faLinkedin,
      url: "https://www.linkedin.com/in/gaurav-porwal-811488118/",
    },
    {
      name: "twitter",
      icon: faTwitter,
      url: "https://twitter.com/gauravprwl14",
    },
    { name: "Github", icon: faGithub, url: "https://github.com/gauravprwl14" },
    { name: "facebook", icon: faFacebook, url: "#" },
  ],
};

const Home = () => {
  return (
    <Container>
      <HeroContent />
    </Container>
  );
};

const HeroContent = ({}) => {
  return (
    <div className="flex flex-col-reverse lg:flex-row lg:justify-normal lg:items-stretch  justify-center items-center  h-full mx-auto px-4 lg:px-10 max-w-screen-2xl ">
      {/* <div className="flex flex-row h-full mx-auto px-10 max-w-screen-2xl"> */}
      <div className="section-1 w-full flex items-center justify-center">
        <div className="pr-5 p-2 flex flex-col items-center lg:items-start ">
          <div className="hidden lg:flex lg:text-2xl font-semibold mb-5">
            <h3>Welcome to my portfolio</h3>
          </div>
          <div className="text-2xl  lg:text-5xl py-2 font-semibold">
            <h3 className="">{`Hello, I'm`}</h3>
          </div>

          <div className="text-4xl lg:text-6xl -ml-1 py-2 text-blue-600 font-bold font-jost lg:mb-3">
            <h3>{USER_OBJ.name}</h3>
          </div>

          <div className="text-2xl lg:text-5xl py-2 font-semibold">
            <h3>{USER_OBJ.designation}</h3>
          </div>

          <div className="designation lg:text-2xl my-5 text-gray-700 font-jost text-center lg:text-start">
            <h3>{USER_OBJ.description}</h3>
          </div>

          <div className="cta-section px-2 my-10 flex w-full relative">
            <div>
              <Button
                variant="secondary"
                className=" rounded-full  text-white bg-blue-600 font-semibold px-10 py-4 hover:bg-blu-400 hover:text-gray-200"
              >
                About me
              </Button>
            </div>
            <div className="flex flex-row flex-1  items-center ml-4">
              {USER_OBJ.social.map((socialObj, index) => {
                return (
                  <div key={index} className=" w-4 h-4 mx-2">
                    <Link href={socialObj.url} target="_blank">
                      <FontAwesomeIcon icon={socialObj.icon}></FontAwesomeIcon>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mouse-container absolute bottom-4 w-full left-2/4">
            <h3 className="">
              <img src={"/img/slider/mouse.svg"} alt="image" />
            </h3>
          </div>
        </div>
      </div>

      <div className="section-2 w-60 lg:mb-10 lg:h-full lg:w-full flex items-center flex-col justify-center max-w-2xl">
        <div className="avatar-container">
          <h3 className="">
            <img
              src={
                USER_OBJ && USER_OBJ.img
                  ? USER_OBJ.img
                  : "/img/slider/avatar.png"
              }
              alt="image"
            />
          </h3>
        </div>
      </div>
    </div>
  );
};

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full h-auto clear-both float-left -mt-20" id="home">
      <div className="w-full h-dvh relative clear-both float-left">
        <div className="bg-[url('/img/slider/light-bg.jpg')] absolute top-0 right-0 left-0 bottom-0 bg-no-repeat bg-center bg-cover">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Home;
