import { useEffect, useState } from "react";
import Container from "../../../utils/container/Container";
import cookBook from "../../../../public/images/cookbook.png";
import axios from "axios";
import { Link } from "react-router";
import recipeBook from "../../../../public/images/cook-book.png";
import arrowIcon from "../../../../public/images/right-arrow (1).png";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Tilt } from "react-tilt";
import AOS from "aos";
import "aos/dist/aos.css";

const categories = [
  {
    id: "all",
    name: "All",
    image: "https://cdn-icons-png.flaticon.com/512/6122/6122447.png",
  },
  {
    id: "dessert",
    name: "Dessert",
    image:
      "https://cdn.icon-icons.com/icons2/1646/PNG/512/recipedessertcakeicon_109876.png",
  },
  {
    id: "salad",
    name: "Salad",
    image: "https://img.icons8.com/color/96/000000/salad.png",
  },
  {
    id: "fish",
    name: "Fish",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/036/397/392/small/ai-generated-grilled-fish-braised-fish-food-isolated-on-transparent-background-png.png",
  },
  {
    id: "italian",
    name: "Italian",
    image: "https://cdn-icons-png.flaticon.com/512/2821/2821801.png",
  },
  {
    id: "mexican",
    name: "Mexican",
    image: "https://img.icons8.com/color/96/000000/taco.png",
  },
  {
    id: "asian",
    name: "Asian",
    image: "https://img.icons8.com/color/96/000000/noodles.png",
  },
];

const defaultOptions = {
  reverse: false,
  max: 20,
  perspective: 1000,
  scale: 1,
  speed: 900,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

const LatestRecipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          "https://kitchen-tales-server.onrender.com/api/recipes"
        );
        setRecipes(response.data.data);
        setFilteredRecipes(response.data.data.slice(0, 8));
      } catch (error) {
        console.log("Failed to fetch all recipes", error);
      }
    };
    fetchRecipes();
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    if (category === "All") {
      setFilteredRecipes(recipes.slice(0, 8));
    } else {
      const filtered = recipes.filter(
        (recipe) => recipe.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredRecipes(filtered.slice(0, 8));
    }
  };

  return (
    <div className="bg-orange-50 pt-20 m-0">
      <Container>
        {/* Title Section */}
        <div className="relative h-[200px]" data-aos="fade-up">
          <img
            className="absolute inset-0 w-[60%] h-[50%] md:h-[40%] object-cover mx-auto"
            src="https://png.pngtree.com/png-clipart/20220925/original/pngtree-red-banner-ribbon-colorful-luxurious-with-golden-border-png-image_8631672.png"
            alt="Ribon"
          />
          <h2 className="absolute text-md md:text-lg lg:text-3xl py-7 md:py-2  lg:py-0 text-orange-200  font-bold top-[3%] left-[50%] transform -translate-x-1/2">
            Latest Recipes
          </h2>
          <p className="absolute text-center  text-xs text-orange-300 font-bold top-[20%] left-[50%] lg:block hidden transform -translate-x-1/2">
            Discover the newest culinary creations! Explore mouthwatering
            recipes crafted to inspire your delicious meal.
          </p>
        </div>

        <div>
          <div
            className="flex flex-wrap justify-center gap-6 mb-8"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.name)}
                className={`flex flex-col items-center p-2 px-4 border rounded-lg hover:shadow-md transition duration-200 ${
                  activeCategory === category.name
                    ? "bg-orange-200 border-orange-500 shadow-md"
                    : "bg-white border-gray-200 hover:border-orange-600 hover:bg-gray-100"
                }`}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-16 h-16 mb-2"
                />
                <span
                  className={`text-md font-bold ${
                    activeCategory === category.name
                      ? "text-orange-600"
                      : "text-orange-900"
                  }`}
                >
                  {category.name}
                </span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 px-3 sm:px-0">
            {filteredRecipes.map((recipe, index) => (
              <Tilt options={defaultOptions} key={recipe._id}>
                <div
                  className="p-3 sm:p-4 bg-white overflow-hidden border border-orange-800 shadow rounded-lg hover:scale-105 transition-transform"
                  data-aos="zoom-in-up"
                  data-aos-delay={index * 100}
                >
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-md mb-3 sm:mb-4"
                  />
                  <h3 className="text-lg sm:text-xl font-bold text-red-800 mb-2">
                    {recipe.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-orange-900 line-clamp-2 mb-3">
                    {recipe.description}
                  </p>
                  <Rating
                    style={{ maxWidth: 100 }}
                    value={recipe.rating}
                    readOnly
                    halfFillMode="svg"
                  />
                  <p className="font-bold text-red-900 text-sm sm:text-lg mt-2">
                    Category:{" "}
                    <span className="text-sm sm:text-lg font-semibold text-orange-400">
                      {recipe?.category}
                    </span>
                  </p>
                  <div className="flex items-center gap-3 sm:gap-4 pt-3">
                    <img
                      src={recipe.author_id?.userPhoto || "/default.jpg"}
                      alt={recipe.author_id?.fullName || "Author"}
                      className="w-10 h-10 sm:w-14 sm:h-14 object-cover border p-1 bg-red-800 rounded-full"
                    />
                    <p className="text-sm sm:text-lg font-cursive text-red-900">
                      {recipe.author_id?.fullName}
                    </p>
                  </div>
                </div>
              </Tilt>
            ))}
          </div>

          <div
            className="mt-10 flex justify-center mb-10"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <Link to="/allRecipesPage">
              {/* <button className="flex items-center btn text-amber-950 text-base font-cursive bg-orange-300 hover:text-white hover:bg-amber-700">
                <img className="w-8 h-8" src={recipeBook} alt="" />
                View All Recipes
                <img className="w-6 h-6 pt-1" src={arrowIcon} alt="" />
              </button> */}

              <button className="flex items-center gap-2 px-5 py-2 text-amber-950 text-base font-cursive bg-orange-300 hover:text-white hover:bg-amber-700 rounded-md shadow-md">
                <img className="w-8 h-8" src={recipeBook} alt="Recipe Book" />
                View All Recipes
                <img
                  className="w-5 h-5 pt-1"
                  src={arrowIcon}
                  alt="Arrow Icon"
                />
              </button>
            </Link>
          </div>

          <div
            className="divider divider-error mb-0"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <img
              className="w-8 h-8 animate-bounce"
              src={cookBook}
              alt={cookBook}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LatestRecipe;
