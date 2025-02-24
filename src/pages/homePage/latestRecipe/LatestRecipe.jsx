import { useEffect, useState } from "react";
import Container from "../../../utils/container/Container";
import cookBook from "../../../../public/images/cookbook.png";
import axios from "axios";
import { Link } from "react-router";
import recipeBook from "../../../../public/images/cook-book.png";
import arrowIcon from "../../../../public/images/right-arrow (1).png";
// Rating
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
// Tilt
import { Tilt } from "react-tilt";

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
// Tilt
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
        const response = await axios.get("http://localhost:5000/api/recipes");
        // console.log(response);
        setRecipes(response.data.data);
        setFilteredRecipes(response.data.data.slice(0, 8));
      } catch (error) {
        console.log("Failed to fetch all recipes", error);
      }
    };
    fetchRecipes();
  }, []);

  const fetchRecipesByCategory = async (category) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/recipes/category/${category}`
      );
      // console.log(response);
      setRecipes(response.data.data);
    } catch (error) {
      console.log("Error fetching recipes by category ", error);
    }
  };
  console.log(fetchRecipesByCategory);

  const handleCategoryClick = (category) => {
    setActiveCategory(category); // Track active tab
    if (category === "All") {
      setFilteredRecipes(recipes.slice(0, 8));
    } else {
      const filtered = recipes.filter(
        (recipe) => recipe.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredRecipes(filtered.slice(0, 8)); // Show the first 8 recipes of the selected category
    }
  };

  return (
    <div className="bg-orange-50 pt-20 m-0">
      <Container>
        <div className="relative h-[200px]">
          <img
            className="absolute inset-0 w-[60%] h-[40%] object-cover mx-auto"
            src={
              "https://png.pngtree.com/png-clipart/20220925/original/pngtree-red-banner-ribbon-colorful-luxurious-with-golden-border-png-image_8631672.png"
            }
            alt=""
          />
          {/* Title section */}
          <h2 className="absolute text-3xl text-orange-200 font-bold top-[3%] left-[50%] transform -translate-x-1/2">
            Latest Recipes
          </h2>
          <p className="absolute text-center text-xs text-orange-300 font-bold top-[20%] left-[50%] transform -translate-x-1/2">
            Discover the newest culinary creations! Explore mouthwatering
            recipes crafted to inspire your delicious meal.
          </p>
        </div>

        <div>
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
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

          {/* Recipe Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredRecipes.map((recipe) => (
              <Tilt options={defaultOptions} key={recipe._id}>
                <div
                  key={recipe._id}
                  className="p-4 bg-white overflow-hidden border border-orange-800  shadow rounded-lg transition-transform transform  hover:scale-105"
                >
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-xl font-bold text-red-800 mb-2">
                    {recipe.title}
                  </h3>
                  <p className="text-sm text-orange-900 line-clamp-2 mb-4">
                    {recipe.description}
                  </p>
                  <p className="text-sm mb-2 ">
                    <Rating
                      style={{ maxWidth: 120 }}
                      value={recipe.rating}
                      readOnly
                      halfFillMode="svg"
                    />
                  </p>
                  <p className="font-bold text-red-900 text-lg">
                    Category:{" "}
                    <span className="text-lg font-semibold text-orange-400">
                      {recipe?.category}
                    </span>
                  </p>
                  <div className="flex justify-start text-center items-center gap-4   pt-4">
                    <img
                      src={recipe.author_id?.userPhoto || "/default.jpg"} // Fallback to a default image if none provided
                      alt={recipe.author_id?.fullName || "Author"}
                      className=" w-16 h-16 object-cover border p-2 bg-red-800 rounded-full"
                    />
                    <p className="text-lg font-cursive text-red-900">
                      {recipe.author_id?.fullName}
                    </p>
                  </div>
                </div>
              </Tilt>
            ))}
          </div>

          {/* Show All Recipes Button */}
          <div className="mt-10 flex justify-center mb-10">
            <Link to={"/allRecipesPage"}>
              <button className="flex items-center btn  text-amber-950 text-lg font-cursive bg-orange-300 hover:text-white hover:bg-amber-700 ">
                <img className="w-8 h-8" src={recipeBook} alt="" />
                View All Recipes
                <img className="w-6 h-6 pt-1" src={arrowIcon} alt="" />
              </button>
            </Link>
          </div>
          {/* Divider */}
          <div className="divider divider-error mb-0">
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
