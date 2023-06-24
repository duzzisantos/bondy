import React, { FunctionComponent } from "react";
import "../../App.css";
import { Link } from "react-router-dom";

interface ScrollContainerProps {
  content: any[];
  category: string;
  handleClick: any;
  extraClass: string;
}
const LandingPageScrollContainer: FunctionComponent<ScrollContainerProps> = ({
  content,
  category,
  handleClick,
  extraClass,
}) => {
  return (
    <section className="col-6 w-100 scroll-container-size">
      <h2 className="text-start mb-4 custom-color">{category}</h2>
      <div className="overflow-x-auto d-flex flex-row hstack gap-3 shadow-lg scroller">
        {content.map((element, index) => (
          <Link
            to={`/services/${element.category}`}
            key={index}
            className={`text-decoration-none w-100 shadow-sm d-flex flex-column vstack gap-3 ${extraClass}`}
            onClick={handleClick}
            title={element.category}
          >
            <span className={`service-icon-font custom-color`}>
              {element.icon}
            </span>
            <span className="custom-color">{element.category}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default LandingPageScrollContainer;
