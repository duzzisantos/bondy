import { CardHeader } from "@mui/material";
import React, { FunctionComponent } from "react";
import "../../App.css";
import { Card } from "react-bootstrap";
import { Link } from "react-bootstrap-icons";

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
    <section className="col-9 p-2 scroll-container-size">
      <h2 className="text-start">{category}</h2>
      <div className="col-12 overflow-x-scroll d-flex flex-rrow hstack gap-2 border border-secondary">
        {content.map((element, index) => (
          <Link
            to={`/services/${category}`}
            key={index}
            className="text-decoration-none w-25"
            onClick={handleClick}
          >
            <Card>
              <CardHeader>{element.category}</CardHeader>
              <Card.Body>{element.icon}</Card.Body>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default LandingPageScrollContainer;
