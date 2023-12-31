import React, { FunctionComponent, useState } from "react";
import "../components/Home/LandingPage.scss";
import LandingPageScrollContainer from "src/components/Home/LandingPageScrollContainer";
import { servicesList } from "src/components/Home/landingPageContent";
import { InfoCircle } from "react-bootstrap-icons";
import TrendingServices from "src/components/Home/TrendingServices";

const LandingPage: FunctionComponent = () => {
  const [hover, setHover] = useState(false);
  const handleClick = () => {
    console.log("This was clicked");
  };

  const [show, setShow] = useState(false);

  const displayInfo = () => {
    setShow(!show);
  };
  return (
    <div className="col-10 px-5 pt-5 mt-1 py-5 ms-auto vh-100 vstack gap-5 d-flex flex-column align-items-center">
      <LandingPageScrollContainer
        setHover={setHover}
        hover={hover}
        content={servicesList}
        category="Services"
        handleClick={handleClick}
        extraClass="p-5"
        extraElement={null}
        displayExtraElement={null}
      />
      <LandingPageScrollContainer
        content={servicesList.reverse().slice(0, 3)}
        category="Trending Services"
        handleClick={handleClick}
        hover={hover}
        setHover={setHover}
        extraClass="p-2"
        extraElement={
          <InfoCircle onClick={displayInfo} title="What is this?" />
        }
        displayExtraElement={show && <TrendingServices />}
      />
    </div>
  );
};

export default LandingPage;
