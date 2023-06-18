import React, { FunctionComponent } from "react";
import "../components/Home/LandingPage.scss";
import LandingPageScrollContainer from "src/components/Home/LandingPageScrollContainer";
import { servicesList } from "src/components/Home/landingPageContent";

const LandingPage: FunctionComponent = () => {
  const handleClick = () => {
    console.log("This was clicked");
  };
  return (
    <div className="col-lg-9 scroll-container-fixed pt-5 vstack gap-5 d-flex flex-column align-items-center">
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
