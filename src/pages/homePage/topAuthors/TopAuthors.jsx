import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import Container from "../../../utils/container/Container";
import baker from "../../../../public/images/baker.png";
import chef from "../../../../public/images/chef (1).png";
import arrowIcon from "../../../../public/images/right-arrow (1).png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Main Swiper CSS
import { Pagination, FreeMode, Autoplay } from "swiper/modules";
import chefhat from "../../../../public/images/chef-hat (1).png";

const TopAuthors = () => {
  const [authors, setAuthors] = useState([]);
  // const navigate = useNavigate();

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/authors");
        console.log(response.data);
        setAuthors(response.data.data);
      } catch (error) {
        console.error("Error fetching authors:", error);
      }
    };

    fetchAuthors();
  }, []);

  return (
    <div className="bg-orange-50 pt-20 ">
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
            Top Authors
          </h2>
          <p className="absolute text-center text-xs text-orange-300 font-bold top-[20%] left-[50%] transform -translate-x-1/2">
            Our top authors are here to share their love for cooking, offering
            ideas, tips, and tricks that elevate dining.
          </p>
        </div>

        {/* Author Cards Grid */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10">
          {authors.slice(0, 6).map((author) => (
            <div
              key={author._id}
              className="border border-red-800 rounded-lg p-16 relative bg-white shadow hover:shadow-lg transition"
            >
              <div className="flex flex-col items-center">
                <img
                  className="w-36 h-36 rounded-full  object-cover mb-4"
                  src={author.userPhoto || "https://via.placeholder.com/150"}
                  alt={author.fullName}
                />
                <h3 className="absolute text-lg font-semibold border rounded-lg bg-orange-100 font-cursive top-[80%] py-6 px-10 text-red-800">
                  {author.fullName}
                </h3>
              </div>
            </div>
          ))}
        </div> */}

        {/* Grid or Carousel Layout */}
        <div className="author-carousel">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            loop={true}
            freeMode={true}
            autoplay={{
              delay: 3000,
            }}
            modules={[Pagination, Autoplay, FreeMode]}
          >
            {authors.map((author) => (
              <SwiperSlide key={author._id}>
                <div className="relative author-card rounded-sm  flex flex-col items-center text-center">
                  <img
                    src={author.userPhoto}
                    alt={author.fullName}
                    className="w-full h-96 object-cover rounded-md mb-4"
                  />

                  <div className="absolute border border-b-8 border-red-900 rounded-sm bg-white top-3/4 bottom-0 px-24 py-3">
                    <div className="flex items-center gap-3">
                      <img className="w-10 h-10" src={chefhat} alt="" />
                      <h3 className="font-normal font-cursive text-xl  text-red-900">
                        {author.fullName}
                      </h3>
                    </div>
                    <p className=" text-lg text-gray-700 font-semibold">
                      {author.recipesCount}4 Recipes
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Show All Authors Button */}
        <div className="mt-16 flex justify-center mb-10">
          <Link to={"/authors"}>
            <button className="flex items-center btn  text-amber-950 text-lg font-cursive bg-orange-300 hover:text-white hover:bg-amber-700 ">
              <img className="w-8 h-8" src={chef} alt="" />
              View All Authors
              <img className="w-6 h-6 pt-1" src={arrowIcon} alt="" />
            </button>
          </Link>
        </div>
        {/* Divider */}
        <div className="divider divider-error mb-0 ">
          <img className="w-14 h-14 animate-bounce" src={baker} alt={baker} />
        </div>
      </Container>
    </div>
  );
};

export default TopAuthors;
