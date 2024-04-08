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
          <div className="lg:basis-1/3">
            <div className="font-jost text-8xl flex flex-row mb-12 items-center justify-center font-bold">
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
          <div className="lg:basis-2/3 bg-blue-500">
            <div> {ABOUT_US.bio}</div>
            <div> {ABOUT_US.email}</div>

            <div> card about my domain Web Mobile and backend and AI</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
