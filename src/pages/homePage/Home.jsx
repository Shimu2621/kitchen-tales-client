import VideoBanner from "./videoBanner/VideoBanner";
import LatestRecipe from "./latestRecipe/LatestRecipe";
import TopAuthors from "./topAuthors/TopAuthors";
import SpecialOffer from "./specialOffer/SpecialOffer";

const Home = () => {
  return (
    <div>
      <VideoBanner />
      <LatestRecipe />
      <TopAuthors />
      <SpecialOffer />
    </div>
  );
};

export default Home;
