import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Container from "../../utils/container/Container";
import baker from "../../../public/images/baker.png";
import { Link } from "react-router";

const AuthorsPage = () => {
  const [authors, setAuthors] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const searchRef = useRef(null);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const response = await axios.get(
          `https://kitchen-tales-server.onrender.com/api/authors?search=${searchValue}`
        );
        console.log(response.data);
        setAuthors(response.data.data);
      } catch (error) {
        console.error("Error fetching authors:", error);
      }
    };
    fetchAuthors();
  }, [searchValue]);

  const handleSearch = () => {
    setSearchValue(searchRef.current.value);
  };

  return (
    <div className="bg-orange-50">
      {/* Banner Section */}
      <div className="relative mb-10">
        <img
          src="https://www.wliw.org/wp-content/uploads/sites/128/2022/07/book-composite-1_wide-e1ecb14030c1fe234f73242bb0f6e0da03839263.jpg"
          className="w-full h-[40vh] md:h-[50vh] object-cover rounded-none shadow-lg"
          alt="Banner Image"
        />
        {/* opacity for shade */}
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-80 text-white">
          {/* text */}
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Meet Our Authors
          </h2>
          <p className="md:text-2xl text-lg text-center font-semibold px-4">
            Get to know the creators behind the magic! Dive into a collection of
            profiles showcasing <br /> our authors, their recipes, and their
            blogs!
          </p>
        </div>
      </div>

      {/* Search Bar functionality */}
      <div className="join flex flex-col items-center space-y-4  border border-black bg-black p-8 max-w-4xl w-full mx-auto">
        <div className="flex items-center  w-full max-w-4xl rounded-md">
          <input
            ref={searchRef}
            onClick={handleSearch}
            type="text"
            className="input input-bordered join-item flex-1 bg-white"
            placeholder="Search here..."
          />

          <button
            onClick={handleSearch}
            className="btn bg-orange-900 join-item text-white px-10 hover:bg-orange-600"
          >
            Search
          </button>
        </div>
      </div>

      {/* Authors card section */}
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-20 mb-20">
          {authors.map((author) => (
            <div
              key={author?._id}
              className="relative bg-white group overflow-hidden shadow-md rounded-lg p-6 flex flex-col items-center text-center transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-br from-orange-100 via-orange-300 to-orange-500"
            >
              {/* Gradient hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-200 via-orange-400 to-orange-600 opacity-0 group-hover:opacity-60 transition duration-300 rounded-lg z-0"></div>

              <img
                className="w-24 h-24 rounded-full object-cover mb-4 z-10 relative border-4 border-orange-200 group-hover:border-white"
                src={author?.userPhoto}
                alt={author?.fullName}
              />
              <h3 className="text-xl font-cursive text-red-900 font-semibold mb-4 z-10 relative">
                {author?.fullName}
              </h3>
              <div className="flex gap-4 z-10 relative">
                <Link to={`/recipes/author/${author._id}`}>
                  <button className="px-4 py-2 bg-amber-400 text-white rounded-lg hover:bg-amber-600 transition font-semibold">
                    All Recipes
                  </button>
                </Link>
                <Link to={`/blogs/${author.blogId}`}>
                  <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-800 transition font-semibold">
                    All Blogs
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="divider divider-error mb-0 pb-20 ">
          <img className="w-14 h-14 animate-bounce" src={baker} alt={baker} />
        </div>
      </Container>
    </div>
  );
};

export default AuthorsPage;
