import VideoBanner from "./videoBanner/VideoBanner";
import LatestRecipe from "./latestRecipe/LatestRecipe";
import TopAuthors from "./topAuthors/TopAuthors";
import SpecialOffer from "./specialOffer/SpecialOffer";
import Testimonials from "./testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <VideoBanner />
      <LatestRecipe />
      <TopAuthors />
      <SpecialOffer />
      <Testimonials />
    </div>
  );
};

export default Home;
