import React, { FunctionComponent } from "react";
import "../components/Home/LandingPage.scss";
import LandingPageScrollContainer from "src/components/Home/LandingPageScrollContainer";
import { servicesList } from "src/components/Home/landingPageContent";

const LandingPage: FunctionComponent = () => {
  const handleClick = () => {
    console.log("This was clicked");
  };
  return (
    <div className="col-10 px-5 pt-5 py-5 ms-auto vh-100 vstack gap-5 d-flex flex-column align-items-center">
      <LandingPageScrollContainer
        content={servicesList}
        category="Services"
        handleClick={handleClick}
        extraClass="p-5"
        ExtraElement={null}
      />
      <LandingPageScrollContainer
        content={servicesList}
        category="Accessories"
        handleClick={handleClick}
        extraClass="p-5"
        ExtraElement={null}
      />
      <LandingPageScrollContainer
        content={servicesList.reverse().slice(0, 3)}
        category="Trending Services"
        handleClick={handleClick}
        extraClass="p-2"
        ExtraElement={
          <a href="https://msn.com" className="mx-auto">
            What is this?
          </a>
        }
      />
    </div>
  );
};

export default LandingPage;
