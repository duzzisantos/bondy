import { CardHeader } from "@mui/material";
import React, { FunctionComponent } from "react";
import { Card } from "react-bootstrap";

interface ScrollContainerProps {
  content: any[];
}
const LandingPageScrollContainer: FunctionComponent<ScrollContainerProps> = ({
  content,
}) => {
  return (
    <div className="col-9 bg-danger">
      <section>
        <h2>Services</h2>
        {content.map((element, index) => (
          <Card key={index}>
            <CardHeader>{element.category}</CardHeader>
            <Card.Body>{element.icon}</Card.Body>
          </Card>
        ))}
      </section>
    </div>
  );
};

export default LandingPageScrollContainer;
