import React, { FunctionComponent } from "react";
import "../components/Home/LandingPage.scss";
import LandingPageScrollContainer from "src/components/Home/LandingPageScrollContainer";
import { servicesList } from "src/components/Home/landingPageContent";

const LandingPage: FunctionComponent = () => {
  const handleClick = () => {
    console.log("This was clicked");
  };
  return (
    <div className="col-9  p-2 vstack gap-4">
      <LandingPageScrollContainer
        content={servicesList}
        category="Services"
        handleClick={handleClick}
      />
      <LandingPageScrollContainer
        content={servicesList}
        category="Accessories"
        handleClick={handleClick}
      />
    </div>
  );
};

export default LandingPage;
