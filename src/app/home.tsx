import React from "react";

const USER_OBJ = {
  name: "Gaurav Porwal",
  designation: "Fullstack Developer",
  description:
    "Collaborating with highly skilled individuals, our agency delivers top-quality services.",
  img: "/img/slider/avatar.png",
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
    <div className="flex flex-row h-full mx-auto px-10 max-w-screen-2xl ">
      <div className="section-1 w-full flex items-center  justify-center">
        <div className="pr-5 p-2">
          <div className=" text-2xl font-semibold mb-5">
            <h3>Welcome to my portfolio</h3>
          </div>
          <div className=" text-5xl py-2 font-semibold">
            <h3 className="">{`Hello, I'm`}</h3>
          </div>

          <div className="text-6xl -ml-1 py-2 text-blue-600 font-bold font-jost mb-3">
            <h3>{USER_OBJ.name}</h3>
          </div>

          <div className="text-5xl py-2 font-semibold">
            <h3>{USER_OBJ.designation}</h3>
          </div>

          <div className="designation text-2xl my-5 text-gray-700 font-jost">
            <h3>{USER_OBJ.description}</h3>
          </div>

          <div className="cta-section">
            <button></button>
          </div>
        </div>
      </div>

      <div className="section-2 w-full flex items-center flex-col justify-center">
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
