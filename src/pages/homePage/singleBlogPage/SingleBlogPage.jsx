import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Container from "../../../utils/container/Container";
import calender from "../../../../public/images/calendar (1).png";
import author from "../../../../public/images/author.png";
import facebook from "../../../../public/images/facebook.png";
import toast from "react-hot-toast";

const SingleBlogPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [newComment, setNewComment] = useState({
    commenterId: "",
    commentText: "",
  });
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `https://kitchen-tales-server.onrender.com/api/blogs/${id}`
        );
        console.log("Blog's data:", response.data);
        setBlog(response.data.data);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };
    fetchBlog();
  }, [id, refreshKey]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!newComment.commenterId || !newComment.commentText) {
      toast.error("Please provide your name and comment before submitting.");
      return;
    }

    const commentData = {
      commenterId: "67841e889e833d27f319e334",
      commentText: newComment.commentText,
    };

    try {
      const response = await axios.patch(
        `https://kitchen-tales-server.onrender.com/api/blog/add-comment/${id}`,
        commentData
      );
      console.log(response);
      if (response.data.status === "Success") {
        setRefreshKey((prev) => prev + 1);
        toast.success("Review submitted successfully!");
      }
    } catch (error) {
      console.log(error);
      alert("Failed to add comment. Please try again.");
    }
  };

  if (!blog) {
    // Show a loading indicator while the blog is being fetched
    return (
      <div>
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  const formattedDate = new Date(blog.postedDate).toLocaleDateString("en-US", {
    month: "short", // Abbreviated month (e.g., Jan)
    day: "numeric", // Day as a number (e.g., 30)
    year: "numeric", // Full year (e.g., 2017)
  });

  return (
    <div className="bg-orange-50 pb-10">
      {/* Banner Section */}
      <div className="relative mb-10">
        <img
          src="https://www.impactplus.com/hubfs/blogging-for-business-heres-everything-you-need-to-know.jpg"
          className="w-full h-[50vh] md:h-[60vh] object-cover rounded-none shadow-lg"
          alt="Banner Image"
        />
        {/* opacity for shade */}
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-75 text-white">
          {/* text */}
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Thoughts from the Author’s Desk
          </h2>
          <p className="md:text-xl text-lg text-center font-bold px-4">
            Delve into the author’s unique perspective, where every blog
            captures experiences, insights, and <br /> stories crafted to
            inspire and inform.
          </p>
        </div>
      </div>
      <Container>
        <div className="pt-30 pb-1 bg-white">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-[60vh] object-cover rounded-sm "
          />
          <div className="border border-gray-300 m-4 mt-4 pb-4 p-4 ">
            <h1 className="text-4xl font-bold text-gray-800 ">{blog.title}</h1>
            <div className="flex justify-start gap-8 ">
              {/* Date */}
              <div className="flex gap-2 items-center font-sarif">
                <img className="w-5 h-7 pt-2 " src={calender} alt="" />
                <p className="text-gray-600 mt-2">{formattedDate}</p>
              </div>
              {/* Author name */}
              <div className="flex gap-2 items-center font-sarif">
                <img className="w-5 h-7 pt-2 " src={author} alt="" />
                <p className="text-gray-600 mt-2">
                  By{" "}
                  <a
                    href={`/author/${blog.author_id?._id}`}
                    className=" text-orange-700 font-semibold hover:underline"
                  >
                    {" "}
                    {blog?.author_id?.fullName}
                  </a>
                </p>
              </div>
            </div>

            {/* Content & description */}
            <p className="mt-6 font-bold text-lg text-gray-600 italic">
              {blog.content}
            </p>
            <p className="mt-6 text-gray-700 font-serif indent-20 first-letter:text-5xl first-letter:italic first-letter:text-orange-700">
              {blog.description}
            </p>
            {/* FB btn */}
            <button
              className="px-4 py-2 flex justify-center gap-2 mt-10 bg-orange-200 text-red-900 font-bold rounded-md shadow hover:bg-orange-700 hover:text-white transition"
              onClick={() =>
                window.open(
                  `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`,
                  "_blank"
                )
              }
            >
              Share on Facebook
              <img className="w-6 h-6" src={facebook} alt="" />
            </button>

            <div className="flex w-full flex-col">
              <div className="divider divider-start text-gray-700"></div>
            </div>

            {/* Comment display section */}
            <div className="p-4 flex justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Comments:
                </h2>
                <div className="mb-8 flex flex-col border border-gray-300 ">
                  {blog.comments.length > 0 ? (
                    blog.comments.map((comment, index) => (
                      <div key={index} className="w-[100%] m-4 p-4 ">
                        <h4>{comment.commenterId?.fullName}</h4>
                        <p className="text-gray-600">{comment.commentText}</p>
                        <small className="text-gray-400 text-sm">
                          Submit on: {""}
                          {new Date(
                            comment.submissionDate
                          ).toLocaleDateString()}
                        </small>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500 mt-4">
                      No comments yet. Be the first to comment!
                    </p>
                  )}
                </div>
              </div>

              {/* Comment Form */}
              <div className="w-[50%] ">
                <h2 className="text-xl text-black font-bold mb-4">
                  Write Your Comment
                </h2>
                <div className="border border-gray-300">
                  <form
                    onSubmit={handleCommentSubmit}
                    className="shadow-md p-4"
                  >
                    <div className="mb-4">
                      <label htmlFor="">Your Name</label>
                      <input
                        type="text"
                        name="commenterId"
                        value={newComment.commenterId}
                        onChange={(e) =>
                          setNewComment((prev) => ({
                            ...prev,
                            commenterId: e.target.value,
                          }))
                        }
                        placeholder="Enter your name"
                        className="w-full px-4 py-2 mt-2 focus:outline-2 border rounded-lg "
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="">Your Comment</label>
                      <textarea
                        name="commentText"
                        placeholder="Write your comment here..."
                        value={newComment.commentText}
                        rows="4"
                        onChange={(e) =>
                          setNewComment((prev) => ({
                            ...prev,
                            commentText: e.target.value,
                          }))
                        }
                        className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-2"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="p-3 bg-orange-200 text-red-800 font-bold rounded-md hover:bg-orange-800 hover:text-white"
                    >
                      Submit Comment
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SingleBlogPage;
