import React, { FunctionComponent } from "react";
import "../components/Home/LandingPage.scss";
import LandingPageScrollContainer from "src/components/Home/LandingPageScrollContainer";
import { servicesList } from "src/components/Home/landingPageContent";

const LandingPage: FunctionComponent = () => {
  const handleClick = () => {
    console.log("This was clicked");
  };
  return (
    <div className="col-9 pt-5 px-2 py-5 vstack gap-5 d-flex flex-column align-items-center">
      <LandingPageScrollContainer
        content={servicesList}
        category="Services"
        handleClick={handleClick}
        extraClass=""
      />
      <LandingPageScrollContainer
        content={servicesList}
        category="Accessories"
        handleClick={handleClick}
        extraClass=""
      />
      <LandingPageScrollContainer
        content={servicesList.reverse().slice(0, 3)}
        category="Trending Services"
        handleClick={handleClick}
        extraClass="bg-success w-25"
      />
    </div>
  );
};

export default LandingPage;
