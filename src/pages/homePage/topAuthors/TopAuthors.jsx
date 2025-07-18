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
import AOS from "aos";
import "aos/dist/aos.css";

const TopAuthors = () => {
  const [authors, setAuthors] = useState([]);
  // const navigate = useNavigate();

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const response = await axios.get(
          "https://kitchen-tales-server.onrender.com/api/authors"
        );
        console.log(response.data);
        setAuthors(response.data.data);
      } catch (error) {
        console.error("Error fetching authors:", error);
      }
    };

    fetchAuthors();
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="bg-orange-50 pt-20 ">
      <Container>
        <div className="relative h-[200px]" data-aos="fade-up">
          <img
            className="absolute inset-0 w-[60%] h-[40%] object-cover mx-auto"
            src={
              "https://png.pngtree.com/png-clipart/20220925/original/pngtree-red-banner-ribbon-colorful-luxurious-with-golden-border-png-image_8631672.png"
            }
            alt=""
          />
          {/* Title section */}
          <h2 className="absolute text-md md:text-xl lg:text-3xl py-5 md:py-4  lg:py-0 text-orange-200  font-bold top-[3%] left-[50%] transform -translate-x-1/2">
            Top Authors
          </h2>
          <p className="absolute text-center text-xs text-orange-300 font-bold top-[20%] left-[50%] transform -translate-x-1/2 hidden lg:block">
            Our top authors are here to share their love for cooking, offering
            ideas, tips, and tricks that elevate dining.
          </p>
        </div>

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
            {authors.map((author, index) => (
              <SwiperSlide key={author._id}>
                <div
                  className="relative author-card rounded-sm  flex flex-col items-center text-center"
                  data-aos="zoom-in-up"
                  data-aos-delay={index * 100}
                >
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
        <div className="mt-16 flex justify-center mb-10" data-aos="fade-up">
          <Link to={"/authors"}>
            <button className="flex items-center btn  text-amber-950 text-lg font-cursive bg-orange-300 hover:text-white hover:bg-amber-700 ">
              <img className="w-8 h-8" src={chef} alt="" />
              View All Authors
              <img className="w-6 h-6 pt-1" src={arrowIcon} alt="" />
            </button>
          </Link>
        </div>
        {/* Divider */}
        <div
          className="divider divider-error mb-0"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <img className="w-14 h-14 animate-bounce" src={baker} alt={baker} />
        </div>
      </Container>
    </div>
  );
};

export default TopAuthors;
