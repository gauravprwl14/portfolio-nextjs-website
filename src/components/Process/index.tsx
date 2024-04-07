import { PROCESS_OBJECTIVE } from "@/lib/utils";

export const ProcessContent = () => {
  return (
    <div className="process-section h-auto w-full float-left clear-both mx-auto px-4 lg:px-10">
      {/*  py-20 */}
      <div className="w-full h-auto mx-auto max-w-screen-2xl mt-10 lg:mt-20">
        <div className="flex w-full flex-1 justify-evenly text-center flex-col lg:flex-row">
          {PROCESS_OBJECTIVE.map((objective, index) => {
            return (
              <div key={index} className=" lg:pl-16 mb-16">
                <div className="icon-section relative flex flex-1 items-center justify-center w-full mb-8 text-center">
                  <span>
                    {/* Background image */}
                    <img
                      src={`/img/process/${index + 1}.png`}
                      className="relative max-w-32 w-full"
                    ></img>
                    {/* icon  */}
                    <img
                      src={objective.icons.light}
                      className="absolute top-1/2 left-1/2  w-16 h-16 transform -translate-x-1/2 -translate-y-1/2"
                    ></img>
                  </span>
                </div>

                <div className=" mb-5">
                  <h3 className="text-2xl font-semibold">{objective.title}</h3>
                </div>

                <div className="flex w-full">
                  <p className="text-xl text-gray-700 font-jost lg:text-center">
                    {objective.dec}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProcessContent;
