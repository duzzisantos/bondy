import React, { FunctionComponent, useState } from "react";
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
  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(!hover);
  };
  return (
    <section className="col-9 scroll-container-size">
      <h2 className="text-start mb-4 custom-color">{category}</h2>
      <div className="overflow-x-auto d-flex flex-row hstack gap-1 custom-border">
        {content.map((element, index) => (
          <Link
            to={`/services/${element.category}`}
            key={index}
            className={`text-decoration-none text-dark w-25 p-5 shadow-sm d-flex flex-column vstack gap-3`}
            onClick={handleClick}
            onMouseEnter={handleHover}
          >
            <span className="custom-color">{element.category}</span>
            <span
              className={`service-icon-font ${
                hover ? "text-warning" : "custom-color"
              }`}
            >
              {element.icon}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default LandingPageScrollContainer;
