import axios from "axios";
import { useEffect, useState } from "react";
import Modal from "react-modal";

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

const BlogManagement = () => {
  const [blogs, setBlogs] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/blogs");
        console.log(response);
        setBlogs(response.data.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  const openModal = (blog) => {
    setSelectedBlog(blog);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedBlog(null);
    setModalIsOpen(false);
  };

  const deleteBlog = async () => {
    if (!selectedBlog) return;
    try {
      const resoonse = await axios.delete(
        `http://localhost:5000/api/blogs${selectedBlog.id}`
      );
      console.log(resoonse);
      setBlogs(blogs.filter((blog) => blog.id !== selectedBlog.id));
      closeModal();
    } catch (error) {
      console.log("Error deleting blog:", error);
    }
  };

  return (
    <div className="container mx-auto p-10">
      <h1 className="text-3xl text-center text-blue-800 font-bold mb-6">
        Blog Management
      </h1>
      {blogs.length === 0 ? (
        <p>No blogs available</p>
      ) : (
        <div className="overflow-x-auto bg-white shadow-md rounded-sm">
          <table className="min-w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border p-3">Image</th>
                <th className="border p-3">Title</th>
                <th className="border p-3">Author</th>
                <th className="border p-3">Category</th>
                <th className="border p-3">Date Published</th>
                <th className="border p-3">Action</th>
              </tr>
            </thead>

            <tbody>
              {blogs.map((blog) => (
                <tr key={blog?._id} className="text-center">
                  <td className="p-3 border">
                    <img
                      src={blog?.image}
                      alt={blog?.title}
                      className="w-32 h-20 object-cover "
                    />
                  </td>
                  <td className="p-3 border">{blog?.title}</td>
                  <td className="p-3 border">{blog?.author_id?.fullName}</td>
                  <td className="p-3 border">{blog?.category}</td>
                  <td className="p-3 border">
                    {new Date(blog?.postedDate).toLocaleDateString()}
                  </td>
                  <td className="p-3 border">
                    <button
                      onClick={() => openModal(blog)}
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
              Are you sure, You want to delete this blog?
            </p>
            <div className="flex justify-center gap-2 mt-4">
              <button
                onClick={closeModal}
                className="px-3 py-1 rounded text-white bg-gray-300 hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={deleteBlog}
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

export default BlogManagement;
