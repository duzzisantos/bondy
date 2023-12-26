import React, { FunctionComponent } from "react";
import "../../App.css";
import { Link } from "react-router-dom";

interface ScrollContainerProps {
  content: any[];
  category: string;
  handleClick: any;
  hover: boolean;
  setHover: any;
  extraClass: string;
  extraElement: any;
  displayExtraElement: any;
}
const LandingPageScrollContainer: FunctionComponent<ScrollContainerProps> = ({
  content,
  category,
  handleClick,
  setHover,
  hover,
  extraClass,
  extraElement,
  displayExtraElement,
}) => {
  return (
    <section className="col-6 w-100 scroll-container-size">
      {displayExtraElement}
      <h2 className="text-start mb-4 text-secondary fw-bold">
        {category} {extraElement}
      </h2>

      <div className="overflow-x-auto d-flex flex-row hstack gap-1 shadow-lg scroller">
        {content.map((element, index) => (
          <Link
            to={`/services/${element.category}`}
            key={index}
            className={`${
              hover ? "hover-card" : ""
            } text-decoration-none w-100 shadow-sm d-flex flex-column vstack gap-3 ${extraClass}`}
            onClick={handleClick}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            title={element.category}
          >
            <span className={`service-icon-font text-secondary`}>
              {element.icon}
            </span>
            <span className="text-secondary">{element.category}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default LandingPageScrollContainer;
