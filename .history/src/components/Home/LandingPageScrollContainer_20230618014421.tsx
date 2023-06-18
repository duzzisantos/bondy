import React, { FunctionComponent } from "react";
import "../../App.css";
import { Link } from "react-router-dom";

interface ScrollContainerProps {
  content: any[];
  category: string;
  handleClick: any;
}
const LandingPageScrollContainer: FunctionComponent<ScrollContainerProps> = ({
  content,
  category,
  handleClick,
}) => {
  return (
    <section className="col-6 w-100 scroll-container-size">
      <h2 className="text-start mb-4 custom-color">{category}</h2>
      <div className="overflow-x-scroll w-100 d-flex flex-row hstack gap-1 custom-border">
        {content.map((element, index) => (
          <Link
            to={`/services/${element.category}`}
            key={index}
            className={`text-decoration-none p-5 w-100 shadow-sm d-flex flex-column vstack gap-3`}
            onClick={handleClick}
          >
            <span className="custom-color">{element.category}</span>
            <span className={`service-icon-font custom-color`}>
              {element.icon}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default LandingPageScrollContainer;
