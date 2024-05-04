import { PORTFOLIO } from "@/lib/utils";
import { TextWrapper } from "@/components/TextWrapper";
import BadgeList from "@/components/BadgeList";
import { Badge } from "@/components/ui/badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

export const Portfolio = () => {
  console.log(PORTFOLIO);
  return (
    <div className="process-section h-auto w-full float-left clear-both mx-auto px-4 lg:px-10">
      <div className="portfolio-section w-full h-auto float-left clear-both">
        <div className="portfolio-content w-full h-auto float-left clear-both">
          <div className="portfolio-title w-full h-auto float-left clear-both">
            <h2 className="text-3xl font-bold text-center text-gray-800">
              Portfolio
            </h2>
          </div>

          <div className="portfolio-list w-full h-auto float-left clear-both grid grid-cols-3 gap-4 p-3 m-b-3 rounded-3xl justify-between">
            {PORTFOLIO.items.map((item, index) => {
              return <PortfolioItem {...item} key={index}></PortfolioItem>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
const PortfolioItem = ({
  title,
  url,
  description,
  tags,
  metaData,
}: {
  title: string;
  url: string;
  description: string;
  tags: (typeof PORTFOLIO)["items"][0]["tags"];
  metaData: (typeof PORTFOLIO)["items"][0]["metaData"];
}) => {
  return (
    <div className="portfolio-item w-full h-auto float-left clear-both">
      <div
        className="group rounded-2xl bg-btn p-[30px] h-full "
        // style={{ backgroundColor: "#29282D" }}
        style={{ backgroundColor: "#F5F6F1" }}
      >
        <div className="portfolio-image w-full h-auto float-left clear-both">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={url}
              alt="portfolio-1"
              className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-[110%] group-hover:shadow-lg"
            />
          </div>
        </div>
        <div className="portfolio-description w-full h-auto float-left clear-both my-4 ">
          <div className="py-2 ">
            <h2 className="text-2xl font-semibold text-gray-800 truncate-2-lines">
              {title}
            </h2>
          </div>

          <div className="text-xl my-2 text-gray-700 font-jost">
            <TextWrapper text={description}></TextWrapper>
          </div>
          <div className="text-gray-600">
            <BadgeList badges={tags}></BadgeList>
          </div>
          <div className="text-gray-600">
            <IconList links={metaData.links}></IconList>
          </div>
        </div>
      </div>
    </div>
  );
};

const IconList = ({ links }) => {
  return (
    <div className="flex flex-wrap items-center justify-between w-full">
      <div className="flex flex-wrap flex-row justify-start items-center">
        {links.map((link, index) => {
          const icon = link.icon;

          return (
            <div
              key={index}
              className="w-6 h-6 justify-center items-center bg-gray-200 rounded-full m-2"
            >
              <FontAwesomeIcon icon={icon} className="text-gray-500 text-2xl" />
            </div>
          );
        })}
      </div>
      <div className="flex-auto min-w-0 items-center">
        <button className="flex items-center justify-end text-gray-700 px-2 py-2 rounded w-full flex-1 ">
          <span>See Details </span>
          <FontAwesomeIcon
            icon={faArrowCircleRight}
            className="text-blue-600 text-2xl ml-2 max-w-8"
          />
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
