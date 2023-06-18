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
    <section className="col-9 scroll-container-size">
      <h2 className="text-start mb-4">{category}</h2>
      <div className="overflow-x-scroll d-flex flex-row hstack gap-2 border border-secondary rounded-2 rounded-bottom-0">
        {content.map((element, index) => (
          <Link
            to={`/services/${category}`}
            key={index}
            className="text-decoration-none w-50 service-card shadow-sm"
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
