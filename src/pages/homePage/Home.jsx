import React from "react";
import VideoBanner from "./videoBanner/VideoBanner";
import LatestRecipe from "./latestRecipe/LatestRecipe";

const Home = () => {
  return (
    <div>
      <VideoBanner />
      <LatestRecipe />
    </div>
  );
};

export default Home;
