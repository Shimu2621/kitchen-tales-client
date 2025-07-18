import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Container from "../../utils/container/Container";
import { BiCategoryAlt } from "react-icons/bi";
import bowlnoodles from "../../../public/images/noodles.png";
import chefhat from "../../../public/images/chef.png";

const AllRecipesPage = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");
  // const [loading, setLoading] = useState(true);

  const searchRef = useRef(null);
  const categoryRef = useRef(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          `https://kitchen-tales-server.onrender.com/recipes?search=${searchValue}&category=${categoryValue}`
        );
        setRecipes(response.data.data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, [searchValue, categoryValue]);

  const handleSelectCategory = () => {
    // console.log(categoryRef.current.value);
    setCategoryValue(categoryRef.current.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // console.log(searchRef.current.value);
    setSearchValue(searchRef.current.value);
  };

  return (
    <div className="bg-orange-50">
      {/* Banner Section */}
      <div className="relative mb-10">
        <img
          src="https://i.pinimg.com/originals/a7/c4/b3/a7c4b3aaef4f46c635ad3b29340ef3de.jpg"
          className="w-full h-[50vh] md:h-[60vh] object-cover rounded-none shadow-lg"
          alt="Banner Image"
        />
        {/* opacity for shade */}
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-70 text-white">
          {/* text */}
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Explore All Recipes
          </h2>
          <p className="md:text-2xl text-lg text-center font-bold px-4">
            Welcome to our All Recipes page! Here, you&lsquo;ll find a
            collection of delicious and diverse recipes!
          </p>
        </div>
      </div>

      {/* Search Bar functionality */}
      <div className="join flex flex-col items-center space-y-4 border border-black bg-black p-8 max-w-4xl w-full mx-auto">
        <div className="flex items-center  w-full max-w-4xl rounded-md">
          <input
            ref={searchRef}
            onClick={handleSearch}
            type="text"
            className="input input-bordered join-item flex-1 bg-white"
            placeholder="Search here..."
          />
          <select
            ref={categoryRef}
            onChange={handleSelectCategory}
            className=" select select-bordered join-item flex-1 bg-white"
          >
            <span>
              <BiCategoryAlt />
            </span>
            <option disabled selected>
              All Category
            </option>
            <option>Dessert</option>
            <option>Fish</option>
            <option>Italian</option>
            <option>Asian</option>
            <option>Mexican</option>
            <option>Salad</option>
          </select>
          <button
            onClick={handleSearch}
            className="btn bg-orange-900 join-item text-white px-10 hover:bg-orange-600"
          >
            Search
          </button>
        </div>
      </div>

      {/* Card section */}
      <div className="pt-20">
        <Container>
          <div className="container mx-auto">
            <h2 className="text-2xl lg:text-5xl text-center text-orange-800 font-bold mb-2">
              All Recipes
            </h2>
            <p className="text-center text-sm lg:text-lg text-orange-700 mb-10">
              Explore all our delicious recipes, with step-by-step instructions
              and ingredients!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {recipes.map((recipe) => (
                <div
                  key={recipe._id}
                  className="flex flex-col justify-between h-full p-4 bg-white border border-orange-700 shadow-lg rounded-lg transition-transform transform hover:scale-105"
                >
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-48 sm:h-52 md:h-56 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-xl font-bold text-red-800 mb-2">
                    {recipe.title}
                  </h3>
                  <p className="text-sm text-orange-700 line-clamp-2 mb-4">
                    {recipe.description}
                  </p>

                  {/* <Rating
                    style={{ maxWidth: 120 }}
                    value={parseFloat(rating)} // Ensure the value is a number
                    readOnly
                    fraction={2} // Allows half-star ratings
                    itemStyles={{
                      activeFillImage:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR41doI8kOPH4KjrjGhVdeoi5RbpOOYS8XpmpxhGld9dhYTji7BoqTKOqD2r_irjk7iP8U&usqp=CAU",
                      inactiveFillImage:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR41doI8kOPH4KjrjGhVdeoi5RbpOOYS8XpmpxhGld9dhYTji7BoqTKOqD2r_irjk7iP8U&usqp=CAU",
                      itemShape: "round", // Optional: Default shape is 'star'
                    }}
                  /> */}
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
                  <div className="flex justify-start text-center items-center gap-4  pt-4">
                    <img
                      src={recipe.author_id?.userPhoto || "/default.jpg"} // Fallback to a default image if none provided
                      alt={recipe.author_id?.fullName || "Author"}
                      className=" w-16 h-16 object-cover border p-2 bg-red-800 rounded-full"
                    />
                    <p className="text-lg font-cursive text-red-900">
                      {recipe.author_id?.fullName}
                    </p>
                  </div>
                  <div className="mt-4">
                    <Link to={`/recipes/${recipe._id}`}>
                      <button className="px-4 py-2 flex justify-center gap-2 bg-orange-200 text-red-900 font-bold rounded-md shadow hover:bg-orange-700 hover:text-white transition">
                        View Details
                        <img className="w-5 h-5" src={bowlnoodles} alt="" />
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="divider divider-error  pt-16 pb-20">
            <img
              className="w-10 h-10 animate-bounce "
              src={chefhat}
              alt={chefhat}
            />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default AllRecipesPage;
