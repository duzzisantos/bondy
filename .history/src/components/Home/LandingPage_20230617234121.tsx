import { CardHeader } from "@mui/material";
import React, { FunctionComponent } from "react";
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
    <section className="col-9 p-2">
      <h2>{category}</h2>
      <div>
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
