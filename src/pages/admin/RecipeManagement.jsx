import axios from "axios";
import { useEffect, useState } from "react";

const RecipeManagement = () => {
  const [recipes, setRecipes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        // Log the fetching process to ensure we're hitting the API correctly
        console.log("Fetching recipes...");
        const response = await axios.get("http://localhost:5000/api/recipes");

        // Debugging: check the structure of the response
        console.log("API Response: ", response.data);

        // Assuming the response has data in response.data.data
        setRecipes(response.data.data);
      } catch (error) {
        console.log("Error fetching recipes: ", error);
      } finally {
        // Always set loading to false once done
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  //Delete recipe
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/recipes/${id}`
      );
      console.log(response);
      setRecipes((prev) => prev.filter((recipe) => recipe._id !== id));
    } catch (error) {
      console.log("Error deleting recipe:", error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl text-blue-800 text-center font-bold mb-4">
        Recipe Management
      </h1>

      {recipes.length === 0 ? (
        <p>No recipes available.</p> // Handle case when no recipes are available
      ) : (
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="min-w-full border border-gray-200">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-3 border">Image</th>
                <th className="p-3 border">Title</th>
                <th className="p-3 border">Author</th>
                <th className="p-3 border">Category</th>
                <th className="p-3 border">Date Published</th>
                <th className="p-3 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {recipes.map((recipe) => (
                <tr key={recipe._id} className="hover:bg-gray-50">
                  <td className="p-3 border">
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="w-20 h-20 object-cover"
                    />
                  </td>
                  <td className="p-3 border">{recipe.title}</td>
                  <td className="p-3 border">{recipe.author_id?.fullName}</td>
                  <td className="p-3 border">{recipe.category}</td>
                  <td className="p-3 border">
                    {new Date(recipe.postedDate).toLocaleDateString()}
                  </td>
                  <td className="p-3 border">
                    <button
                      onClick={() => handleDelete(recipe._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded shadow-lg text-center">
          <p className="text-lg font-semibold">Are you sure?</p>
          <p className="text-gray-500">This action cannot be undone.</p>
          <div className="flex justify-center mt-4">
            <button
              className="bg-gray-300 px-4 py-2 rounded mr-2 hover:bg-gray-400"
              onClick={() => handleDelete(null)}
            >
              Cancel
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeManagement;
