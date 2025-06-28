import videoBanner from "../../../assets/videoBanner.mp4";
import Lottie from "lottie-react";
import chefanimation from "../../../../public/Chef.json";
import recipeBook from "../../../../public/images/cook-book.png";
import arrowIcon from "../../../../public/images/right-arrow (1).png";

const VideoBanner = () => {
  return (
    <div className="relative max-w-[1600px] mx-auto w-full h-[80vh] sm:h-[95vh] md:h-[95vh] lg:h-[100vh] overflow-hidden">
      {/* Responsive Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={videoBanner} type="video/mp4" />
      </video>

      {/* Overlay Content */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center bg-black bg-opacity-60 text-white px-4 text-center">
        {/* Lottie Animation */}
        <Lottie
          className="w-[200px] sm:w-[300px] md:w-[400px] lg:w-[450px] h-auto md:mb-4 mb-2"
          animationData={chefanimation}
          loop={true}
        />

        {/* Heading */}
        <h2
          className="text-xl sm:text-3xl md:text-4xl font-bold mb-1 md:mb-2"
          data-aos="fade-up"
        >
          A World of Recipes Awaits, Unleash Your Inner Chef!
        </h2>

        {/* Paragraph + Button */}
        <div className="flex flex-col items-center justify-center gap-3 md:gap-5 mt-2">
          {/* Paragraph visible only on md+ screens */}
          <p className=" text-sm md:text-lg max-w-xl px-4" data-aos="fade-up">
            Join a global community of food lovers. Share your passion and
            discover new flavors every day!
          </p>

          {/* Button should be always visible */}
          <button className="flex items-center gap-2 px-5 py-2 text-amber-950 text-base font-cursive bg-orange-300 hover:text-white hover:bg-amber-700 rounded-md shadow-md">
            <img className="w-6 h-6" src={recipeBook} alt="Recipe Book" />
            Explore Recipes
            <img className="w-5 h-5 pt-1" src={arrowIcon} alt="Arrow Icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoBanner;
