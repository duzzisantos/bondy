import React, { FunctionComponent } from "react";

const TrendingServices: FunctionComponent = () => {
  return (
    <div
      className="col-sm-2 bg-dark mx-5 text-light rounded-1 text-start p-2 position-relative"
      style={{ opacity: 0.9 }}
    >
      <small>
        Trending services are based on the most popular services customers have
        used in recent time.
      </small>
    </div>
  );
};

export default TrendingServices;
