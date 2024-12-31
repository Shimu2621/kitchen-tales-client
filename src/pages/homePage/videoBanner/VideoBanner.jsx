import React from "react";
import videoBanner from "../../../assets/videoBanner.mp4";
import Lottie from "lottie-react";
import chefanimation from "../../../../public/Chef.json";
import recipeBook from "../../../../public/images/cook-book.png";
import arrowIcon from "../../../../public/images/right-arrow (1).png";

const VideoBanner = () => {
  return (
    <div className="relative max-w-[1600px] mx-auto">
      {/* Banner Section */}
      <video autoPlay muted loop playsInline>
        <source src={videoBanner} type="video/mp4" />
      </video>
      {/* opacity for shade */}
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-60 text-white">
        {/* Animation Section */}
        <div className="flex flex-col justify-center items-center">
          <Lottie
            className="w-[300px] sm:w-[450px] md:w-[550px] h-auto"
            animationData={chefanimation}
            loop={true}
          />
          {/* <div className="absolute top-2/3 p-10   "> */}
          {/* text */}
          <h2 className=" text-2xl md:text-4xl font-bold" data-aos="fade-up">
            A World of Recipes Awaits, Unleash Your Inner Chef!
          </h2>
          <p className="md:text-lg text-sm text-center pb-8" data-aos="fade-up">
            Join a global community of food lovers. Share your passion and
            discover new flavors every day!
          </p>
          {/* Button */}
          <button class="flex items-center btn  text-amber-950 text-lg font-cursive bg-orange-300 hover:text-white hover:bg-amber-700 ">
            <img className="w-8 h-8" src={recipeBook} alt="" />
            Explore Recipes
            <img className="w-6 h-6 pt-1" src={arrowIcon} alt="" />
          </button>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default VideoBanner;
