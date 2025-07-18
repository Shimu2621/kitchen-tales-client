import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Container from "../../../utils/container/Container";
import { Rating } from "@smastrom/react-rating";
import family from "../../../../public/images/family.png";
import cookBook from "../../../../public/images/cookbook.png";
import bowlnoodles from "../../../../public/images/noodles.png";
import toast from "react-hot-toast";

const SingleRecipePage = () => {
  const [recipe, setRecipe] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const { id } = useParams();
  const [newReview, setNewReview] = useState({
    rating: 0,
    reviewText: "",
  });
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(
          `https://kitchen-tales-server.onrender.com/api/recipes/${id}`
        );
        console.log("Recipe's data", response.data);
        setRecipe(response.data.data);
      } catch (error) {
        console.error("Error fetching recipe details:", error);
      }
    };

    fetchRecipe();
  }, [id, refreshKey]);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    toast.success(
      isFavorite
        ? "Recipe removed from favorites!"
        : "Recipe added to favorites!"
    );
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    if (!newReview.rating || !newReview.reviewText) {
      toast.error("Please fill all fields before submitting!");
      return;
    }
    // console.log(newReview.rating, newReview.reviewText);

    const reviewData = {
      reviewer_id: "6771dc0aaef7a6de66a246b8",
      rating: newReview.rating,
      reviewText: newReview.reviewText,
    };
    try {
      const response = await axios.patch(
        `https://kitchen-tales-server.onrender.com/api/recipe/add-review/${id}`,
        reviewData
      );
      console.log(response);
      if (response.data.status === "Success") {
        setRefreshKey((prev) => prev + 1);
        toast.success("Review submitted successfully!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (!recipe) return <div>Loading...</div>;

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
            Explore Our Recipes
          </h2>
          <p className="md:text-xl text-lg text-center font-bold px-4">
            Explore this delightful recipe, packed with flavors and perfect for
            any occasion.
            <br /> Learn the ingredients, cooking method, and serving tips!
          </p>
        </div>
      </div>

      {/* Single Recipe section */}
      <div className=" mx-auto flex items-center mt-20 ">
        <Container>
          {/* Title */}
          <div className="divider divider-start divider-error font-bold text-orange-700  text-3xl mb-6">
            {recipe?.title || "Recipe Title"}
          </div>

          {/* Image section */}
          <div className="relative mb-20 ">
            {/* background image */}
            <img
              className="w-full h-[60vh] object-cover rounded-md"
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnKmYgNZkcNExIPCEBXfgcyr-7zEV0VwdzVriytpEPWlyckjLSc3tYc3kL33EtAKbrCsg&usqp=CAU"
              }
              alt=""
            />
            {/* Recipe image */}
            <img
              className="absolute top-[6.3%] w-full left-8 border border-red-800 rounded-md bg-orange-50 mx-auto h-[61vh] object-cover "
              src={recipe?.image || "https://via.placeholder.com/600"}
              alt={recipe?.title}
            />
          </div>

          {/* Description */}
          <p className="mt-8 text-red-900 font-cursive mb-8 text-2xl">
            {recipe?.description}
          </p>
          {/* Details */}
          <div className="flex justify-between">
            <div className="flex flex-wrap gap-6 items-center mb-6">
              <div className="flex items-center gap-4">
                <img
                  className="w-20 h-20 rounded-full border p-2 bg-red-800 shadow-md"
                  src={recipe?.author_id.userPhoto}
                  alt={recipe?.author_id.fullName}
                />
              </div>
              <div className="text-red-900 font-cursive text-2xl">
                <p>{recipe?.author_id.fullName}</p>
                <Rating
                  style={{ maxWidth: 120 }}
                  value={recipe.rating}
                  readOnly
                  halfFillMode="svg"
                />
              </div>
            </div>

            {/* Serving & favorite */}
            <div className="">
              <p className="text-lg font-semibold flex items-center gap-2">
                <img className="w-10 h-10" src={family} alt="" />
                <h5 className="text-red-900 font-bold ">
                  {recipe.servings} Servings
                </h5>
              </p>
              <button
                onClick={toggleFavorite}
                className={`text-xl font-semibold  ${
                  isFavorite ? "text-red-800 " : "text-gray-700"
                }`}
              >
                {isFavorite ? "♥" : "♡"} Save
              </button>
            </div>
          </div>

          {/* Ingredients */}
          <h2 className="text-2xl font-bold text-orange-800 mb-4">
            Ingredients:
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>
                <span className="font-semibold">{ingredient.name}</span>
                {ingredient.quantity && ` - ${ingredient.quantity}`}
              </li>
            ))}
          </ul>

          {/* Methods */}
          <h2 className="text-2xl font-bold text-orange-800 mb-4">
            Preparation Steps:
          </h2>
          <ul className="steps steps-vertical text-gray-500">
            {recipe.method.map((step, index) => (
              <li
                key={index}
                className={`step ${index === 0 ? "step-info" : "step-error"}`}
              >
                {recipe?.method}
              </li>
            ))}
          </ul>

          {/* Reviews */}
          <h2 className="text-2xl font-bold text-orange-800 mt-8 mb-4">
            Reviews:
          </h2>
          <div className="flex justify-between border border-gray-300 p-6  ">
            <div className="flex flex-col ">
              {recipe.reviews.length > 0 ? (
                recipe.reviews.map((review, index) => (
                  <div
                    key={index}
                    className="bg-orange-50 w-full rounded-lg p-6 mb-2 shadow-md"
                  >
                    <p className="font-bold text-lg text-orange-900 mb-4">
                      {review.reviewer_id?.fullName || "Anonymous"}
                    </p>
                    <Rating
                      style={{ maxWidth: 120 }}
                      value={recipe.rating}
                      readOnly
                      halfFillMode="svg"
                    />
                    <p className="text-gray-700 font-medium text-lg mt-4">
                      {review.reviewText}
                    </p>
                    <p className="text-gray-600 font-medium text-lg ">
                      Reviewed on {new Date(review.date).toLocaleDateString()}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-gray-600">No reviews yet.</p>
              )}
            </div>

            {/* Review Form */}
            <form
              onSubmit={handleReviewSubmit}
              className="bg-orange-50 w-[47%] rounded-lg p-6 mb-2 shadow-md"
            >
              <div className="mb-4 flex items-center gap-3">
                <label className="text-lg font-bold text-red-900">
                  Rating:
                </label>
                <Rating
                  style={{ maxWidth: 120 }}
                  value={newReview.rating}
                  halfFillMode="svg"
                  onChange={(value) =>
                    setNewReview((prev) => ({ ...prev, rating: value }))
                  }
                />
              </div>
              <textarea
                className="textarea textarea-bordered rounded-md textarea-md py-0  border border-gray-300 bg-transparent w-full max-w-xs mb-4"
                placeholder="Your Review"
                rows="4"
                value={newReview.reviewText}
                onChange={(e) =>
                  setNewReview((prev) => ({
                    ...prev,
                    reviewText: e.target.value,
                  }))
                }
              ></textarea>
              <button
                type="submit"
                className="px-4 py-2 flex justify-center gap-2 bg-orange-200 text-red-900 font-bold rounded-md shadow hover:bg-orange-700 hover:text-white transition"
              >
                Submit Review
                <img className="w-5 h-5" src={bowlnoodles} alt="" />
              </button>
            </form>
          </div>

          {/* Divider */}
          <div className="divider divider-error mb-20 mt-10">
            <img
              className="w-8 h-8 animate-spin"
              src={cookBook}
              alt={cookBook}
            />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default SingleRecipePage;
