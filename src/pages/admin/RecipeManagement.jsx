import axios from "axios";
import { useEffect, useState } from "react";
import Modal from "react-modal";

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

const RecipeManagement = () => {
  const [recipes, setRecipes] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        // Log the fetching process to ensure we're hitting the API correctly
        console.log("Fetching recipes...");
        const response = await axios.get(
          "https://kitchen-tales-server.onrender.com/api/recipes"
        );

        // Debugging: check the structure of the response
        console.log("API Response: ", response.data);

        // Assuming the response has data in response.data.data
        setRecipes(response.data.data);
        setLoading(true);
      } catch (error) {
        console.log("Error fetching recipes: ", error);
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  const openModal = (recipe) => {
    setSelectedRecipe(recipe);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedRecipe(null);
    setModalIsOpen(false);
  };

  const deleteRecipe = async () => {
    if (!selectedRecipe) return;
    try {
      const response = await axios.delete(
        `https://kitchen-tales-server.onrender.com/api/blogs${selectedRecipe.id}`
      );
      console.log(response);
      setRecipes(recipes.filter((recipe) => recipe.id !== selectedRecipe.id));
      closeModal();
    } catch (error) {
      console.log("Error deleting blog:", error);
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
    <div className="container mx-auto p-10">
      <h1 className="text-3xl text-blue-800 text-center font-bold mb-6">
        Recipe Management
      </h1>

      {recipes.length === 0 ? (
        <p>No recipes available.</p> // Handle case when no recipes are available
      ) : (
        <div className="overflow-x-auto bg-white shadow-md rounded-sm">
          <table className="min-w-full border-collapse border border-gray-200">
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
                      className="w-32 h-20 object-cover"
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
                      onClick={() => openModal(recipe)}
                      className="text-white bg-red-500 px-3 py-1 rounded-md"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Delete Confirmation Modal */}
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            overlayClassName="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50"
            className="bg-white rounded p-6 shadow-lg mx-auto mt-40 max-w-sm"
          >
            <h2 className="text-lg text-center font-bold mb-3">
              Confirm Deletion
            </h2>
            <p className="text-center">
              Are you sure, You want to delete this recipe?
            </p>
            <div className="flex justify-center gap-2 mt-4">
              <button
                onClick={closeModal}
                className="px-3 py-1 rounded text-white bg-gray-300 hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={deleteRecipe}
                className="px-3 py-1 rounded text-white bg-red-500 hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </Modal>
        </div>
      )}
    </div>
  );
};

export default RecipeManagement;
