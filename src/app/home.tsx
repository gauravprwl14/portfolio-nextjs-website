import React from "react";

const USER_OBJ = {
  name: "Gaurav Porwal",
  designation: "Full Stack Developer",
  description: "some random description for 2 lines",
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
    <div className="flex flex-row h-full mx-auto px-10 max-w-screen-2xl">
      <div className="section-1 w-full flex items-center flex-col  justify-around">
        <div className="pr-5">
          <div className=" text-xl  font-semibold p-2">
            <h3>Welcome to my portfolio</h3>
          </div>
          <div className="text-3xl p-2 font-semibold">
            <h3 className="">{`Hello, I'm`}</h3>
          </div>

          <div className="text-5xl p-2 text-blue-600 font-bold">
            <h3>{USER_OBJ.name}</h3>
          </div>

          <div className="designation">
            <h3>{USER_OBJ.designation}</h3>
          </div>

          <div className="designation">
            <h3>{USER_OBJ.description}</h3>
          </div>
        </div>
      </div>

      <div className="section-2 w-full flex items-center flex-col justify-center">
        <div className="">
          <h3 className="">{`Profile Image`}</h3>
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
