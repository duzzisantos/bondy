import React, { FunctionComponent, useState } from "react";
import "../components/Home/LandingPage.scss";
import LandingPageScrollContainer from "src/components/Home/LandingPageScrollContainer";
import { servicesList } from "src/components/Home/landingPageContent";
import { InfoCircle } from "react-bootstrap-icons";
import TrendingServices from "src/components/Home/TrendingServices";

const LandingPage: FunctionComponent = () => {
  const handleClick = () => {
    console.log("This was clicked");
  };

  const [show, setShow] = useState(false);

  const displayInfo = () => {
    setShow(!show);
  };
  return (
    <div className="col-10 px-5 pt-5 py-5 ms-auto vh-100 vstack gap-5 d-flex flex-column align-items-center">
      <LandingPageScrollContainer
        content={servicesList}
        category="Services"
        handleClick={handleClick}
        extraClass="p-5"
        extraElement={null}
      />
      <LandingPageScrollContainer
        content={servicesList}
        category="Accessories"
        handleClick={handleClick}
        extraClass="p-5"
        extraElement={null}
      />
      <LandingPageScrollContainer
        content={servicesList.reverse().slice(0, 3)}
        category="Trending Services"
        handleClick={handleClick}
        extraClass="p-2"
        extraElement={<InfoCircle />}
      />
    </div>
  );
};

export default LandingPage;
