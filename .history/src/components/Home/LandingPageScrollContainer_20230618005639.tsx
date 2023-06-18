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
    <section className="col-9 scroll-container-size">
      <h2 className="text-start mb-4">{category}</h2>
      <div className="overflow-x-scroll d-flex flex-row hstack gap-3 border border-secondary rounded-3 rounded-bottom-0">
        {content.map((element, index) => (
          <Link
            to={`/services/${element.category}`}
            key={index}
            className="text-decoration-none text-dark w-25 p-5 shadow-sm d-flex flex-column vstack gap-5"
            onClick={handleClick}
          >
            <span>{element.category}</span>
            <span className="service-icon-font">{element.icon}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default LandingPageScrollContainer;
