import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import Container from "../../utils/container/Container";
import bowlnoodles from "../../../public/images/noodles.png";
import { Rating } from "@smastrom/react-rating";

const RecipesPageByAuthor = () => {
  const { authorId } = useParams(); //Extract the author's ID from URL
  // console.log("Author ID from URL:", authorId);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipesByAuthor = async () => {
      try {
        const response = await axios.get(
          `https://kitchen-tales-server.onrender.com/api/recipes/author/${authorId}`
        );
        // console.log("Response:", response.data);
        setRecipes(response.data.data);
        // Set loading to false after data is fetched
        setLoading(false);
      } catch (error) {
        console.error("Error fetching recipes:", error);
        setLoading(false);
      }
    };
    fetchRecipesByAuthor();
  }, [authorId]);
  console.log("Recipes:", recipes);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="loading loading-bars loading-lg"></p>
      </div>
    );
  }

  return (
    <div className="bg-orange-50">
      {/* Banner Section */}
      <div className="relative mb-10">
        <img
          src="https://img.freepik.com/premium-photo/photo-chef-garnishing-decorating-restaurant-food-kitchen_763111-37707.jpg"
          className="w-full h-[50vh] md:h-[60vh] object-cover rounded-none shadow-lg"
          alt="Banner Image"
        />
        {/* opacity for shade */}
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-70 text-white">
          {/* text */}
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Explore Our Recipes By Authors
          </h2>
          <p className="md:text-xl text-lg text-center font-bold px-4">
            Explore this delightful recipe, packed with flavors and perfect for
            any occasion.
            <br /> Learn the ingredients, cooking method, and serving tips!
          </p>
        </div>
      </div>

      <div className="mx-auto mt-20">
        <h2 className="text-5xl text-center text-orange-800 font-bold mb-2">
          Culinary Creations by {recipes[0].author_id.fullName || "Author"}
        </h2>
        <p className="text-xl text-center text-orange-800 font-semibold mb-10">
          Discover the heart and soul of cooking with our{" "}
          {recipes[0].author_id.fullName || "Author"}
        </p>
        <Container>
          {recipes.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {recipes.map((recipe) => (
                <div
                  key={recipe._id}
                  className="p-4 bg-white border border-orange-700 shadow-lg rounded-lg transition-transform transform  hover:scale-105 hover:bg-orange-100 mb-20"
                >
                  <img
                    className="w-full h-48 object-cover rounded-md mb-4"
                    src={recipe.image}
                    alt={recipe.title}
                  />

                  <div className="mt-4">
                    <h3 className="text-xl font-bold text-red-800 mb-2">
                      {recipe.title}
                    </h3>
                    <p className="text-sm text-orange-700 line-clamp-2 mb-4">
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
                    <p className="font-semibold text-orange-400 text-lg">
                      Category:{" "}
                      <span className="text-lg font-bold text-red-800">
                        {recipe?.category}
                      </span>
                    </p>
                    <div className="mt-4 mb-6">
                      <Link to={`/recipes/${recipe._id}`}>
                        <button className="px-4 py-2 flex justify-center gap-2 bg-orange-200 text-red-900 font-bold rounded-md shadow hover:bg-orange-700 hover:text-white transition">
                          View Details
                          <img className="w-5 h-5" src={bowlnoodles} alt="" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No recipes found for this author.</p>
          )}
        </Container>
      </div>
    </div>
  );
};

export default RecipesPageByAuthor;
