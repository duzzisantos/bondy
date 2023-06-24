import React, { FunctionComponent } from "react";
import "../components/Home/LandingPage.scss";
import LandingPageScrollContainer from "src/components/Home/LandingPageScrollContainer";
import { servicesList } from "src/components/Home/landingPageContent";

const LandingPage: FunctionComponent = () => {
  const handleClick = () => {
    console.log("This was clicked");
  };
  return (
    <div className="pt-5  py-5 mx-5 vh-100 vstack gap-5 d-flex flex-column align-items-center">
      <LandingPageScrollContainer
        content={servicesList}
        category="Services"
        handleClick={handleClick}
        extraClass="p-5"
      />
      <LandingPageScrollContainer
        content={servicesList}
        category="Accessories"
        handleClick={handleClick}
        extraClass="p-5"
      />
      <LandingPageScrollContainer
        content={servicesList.reverse().slice(0, 3)}
        category="Trending Services"
        handleClick={handleClick}
        extraClass="p-2"
      />
    </div>
  );
};

export default LandingPage;
