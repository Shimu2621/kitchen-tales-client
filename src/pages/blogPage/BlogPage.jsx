import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Container from "../../utils/container/Container";
import sandclock from "../../../public/images/sand-clock.png";
import { Link } from "react-router";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [categoryValue, setCategoryValue] = useState([]);
  const [visibleBlogs, setVisibleBlogs] = useState(6);

  const searchRef = useRef(null);
  // const categoryRef = useRef(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/blogs?search=${searchValue}&category=${categoryValue}`
        );
        const blogsData = response.data.data;
        setBlogs(blogsData);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, [searchValue, categoryValue]);

  const handleSearch = (e) => {
    e.preventDefault();
    // console.log(searchRef.current.value);
    setSearchValue(searchRef.current.value);
  };

  const handleCategoryChange = (e) => {
    setCategoryValue(e.target.value); // Update categoryValue
  };

  // Load More Blogs
  const handleLoadMore = () => {
    setVisibleBlogs((prevCount) => prevCount + 6);
  };

  return (
    <div className="bg-orange-50">
      {/* Banner Section */}
      <div className="relative mb-10">
        <img
          src="https://thefoyer.com/cdn/shop/files/91n0rijA-rL._SL1500_590x590@2x.jpg?v=1726792425"
          className="w-full h-[50vh] md:h-[60vh] object-cover rounded-none shadow-lg"
          alt="Banner Image"
        />
        {/* opacity for shade */}
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-80 text-white">
          {/* text */}
          <h2 className="text-2xl md:text-5xl font-bold mb-4">
            Your Source for Meaningful Content
          </h2>
          <p className="md:text-xl text-lg text-center font-semibold px-4">
            Discover thought-provoking blogs that focus on making a difference.
            Learn new perspectives, gain valuable insights,
            <br /> and stay updated on the topics that matter most.
          </p>
        </div>
      </div>

      {/* Search Bar functionality */}
      <div className="flex flex-col items-center border border-black bg-black p-6 md:p-8 max-w-4xl w-full mx-auto rounded-md">
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
          <input
            ref={searchRef}
            type="text"
            className="input input-bordered flex-1 bg-white w-full"
            placeholder="Search here..."
          />

          <button
            onClick={handleSearch}
            className="btn bg-orange-900 text-white px-6 hover:bg-orange-600 w-full sm:w-auto"
          >
            Search
          </button>
        </div>
      </div>

      <div className=" mx-auto p-8">
        <Container>
          {/* Category Filters */}
          <div className="mb-6">
            <h3 className="text-lg text-gray-700 font-bold italic mb-2">
              Filter by Category:
            </h3>
            <div className="flex flex-wrap font-bold italic text-red-800 gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="category"
                  value=""
                  onChange={handleCategoryChange}
                  className="radio radio-error"
                />
                All
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="category"
                  value="Technology"
                  onChange={handleCategoryChange}
                  className="radio radio-error"
                />
                Technology
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="category"
                  value="Food"
                  onChange={handleCategoryChange}
                  className="radio radio-error"
                />
                Food
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="category"
                  value="Lifestyle"
                  onChange={handleCategoryChange}
                  className="radio radio-error"
                />
                Lifestyle
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="category"
                  value="Health"
                  onChange={handleCategoryChange}
                  className="radio radio-error"
                />
                Health
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="category"
                  value="Wellness"
                  onChange={handleCategoryChange}
                  className="radio radio-error"
                />
                Wellness
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="category"
                  value="Travel"
                  onChange={handleCategoryChange}
                  className="radio radio-error"
                />
                Travel
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="category"
                  value="Baking"
                  onChange={handleCategoryChange}
                  className="radio radio-error"
                />
                Backing
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="category"
                  value="Photography"
                  onChange={handleCategoryChange}
                  className="radio radio-error"
                />
                Photography
              </label>
            </div>
          </div>
          {/* Category Filters */}
          <div className="flex items-center gap-4 mb-6"></div>

          {/* Blog Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14 ">
            {blogs.slice(0, visibleBlogs).map((blog) => (
              <div
                key={blog._id}
                className="bg-white p-4 shadow-md rounded-lg  transition-transform transform  hover:scale-105 hover:bg-orange-100"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover rounded mb-4"
                />
                <h3 className="text-md font-bold text-gray-800">
                  {blog.title}
                </h3>
                <p className="text-gray-700 italic font-semibold text-sm mt-2">
                  By{" "}
                  <span className="text-red-700 font-semibold italic hover:underline">
                    {blog.author_id?.fullName}
                  </span>{" "}
                  on {new Date(blog.postedDate).toLocaleDateString()}
                </p>
                <p className="text-gray-700 text-sm font-semibold italic">
                  Category:{" "}
                  <span className="text-red-700 font-semibold">
                    {blog.category}
                  </span>
                </p>
                <p className="text-gray-700 mt-4 line-clamp-2">
                  {blog.content.substring(0, 100)}...
                </p>
                <Link
                  to={`/blogs/${blog._id}`}
                  className="mt-4 block text-red-700 font-bold hover:underline"
                >
                  Read More
                </Link>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleBlogs < blogs.length && (
            <div className="text-center  flex justify-center mt-6">
              <button
                onClick={handleLoadMore}
                className="px-6 py-3 bg-orange-800 gap-4  flex justify-center text-white font-bold rounded shadow hover:bg-orange-600"
              >
                Load More
                <img className="w-6 h-6" src={sandclock} alt="" />
              </button>
            </div>
          )}
        </Container>
      </div>
    </div>
  );
};

export default BlogPage;
