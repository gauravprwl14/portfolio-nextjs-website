import { PORTFOLIO } from "@/lib/utils";

export const Portfolio = () => {
  return (
    <div className="process-section h-auto w-full float-left clear-both mx-auto px-4 lg:px-10 bg-red-500">
      Portfolio Page
      <div className="portfolio-section w-full h-auto float-left clear-both">
        <div className="portfolio-content w-full h-auto float-left clear-both">
          <div className="portfolio-title w-full h-auto float-left clear-both">
            <h2 className="text-3xl font-bold text-center text-gray-800">
              Our Portfolio
            </h2>
          </div>

          <div className="portfolio-list w-full h-auto float-left clear-both grid grid-cols-3 gap-4 p-3 m-b-3 rounded-3xl justify-between">
            {PORTFOLIO.items.map((item, index) => {
              return <PortfolioItem {...item} key={index}></PortfolioItem>;
            })}

            {/* <div className="portfolio-item w-full h-auto float-left clear-both">
              <div className="portfolio-image w-full h-auto float-left clear-both">
                <img
                  src="/img/portfolio/portfolio-1.jpg"
                  alt="portfolio-1"
                  className="w-full h-auto"
                />
              </div>
              <div className="portfolio-description w-full h-auto float-left clear-both">
                <h3 className="text-2xl font-bold text-gray-800">
                  Portfolio Title
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="portfolio-item w-full h-auto float-left clear-both">
              <div className="portfolio-image w-full h-auto float-left clear-both">
                <img
                  src="/img/portfolio/portfolio-2.jpg"
                  alt="portfolio-2"
                  className="w-full h-auto"
                />
              </div>
              <div className="portfolio-description w-full h-auto float-left clear-both">
                <h3 className="text-2xl font-bold text-gray-800">
                  Portfolio Title
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  euismod, ligula a ultricies varius, nunc turpis efficitur
                  sapien, nec ultricies nunc erat ac dolor.
                </p>
              </div>
            </div>
            <div className="portfolio-item w-full h-auto float-left clear-both">
              <div className="portfolio-image w-full h-auto float-left clear-both"></div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

const PortfolioItem = ({ title, url, description }) => {
  return (
    <div className="portfolio-item w-full h-auto float-left clear-both">
      <div className="portfolio-image w-full h-auto float-left clear-both">
        <img src={url} alt="portfolio-1" className="w-full h-auto" />
      </div>
      <div className="portfolio-description w-full h-auto float-left clear-both">
        <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Portfolio;
