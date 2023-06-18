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
      <h2>{category}</h2>
      <div className="overflow-x-scroll d-inline-block hstack gap-2 border border-secondary">
        {content.map((element, index) => (
          <Link
            to={`/services/${category}`}
            key={index}
            className="text-decoration-none"
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
