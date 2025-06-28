import Lottie from "lottie-react";
import soupanimation from "../../../../public/soupanimation.json";
import dessertanimation from "../../../../public/dessertanimation.json";
import saleanimation from "../../../../public/saleanimation.json";
import dishanimation from "../../../../public/dishanimation.json";
import dinneranimation from "../../../../public/dinneranimation.json";
import pricetag from "../../../../public/images/pricetag.png";
import Container from "../../../utils/container/Container";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SpecialOffer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-orange-50 pt-20">
      <Container>
        {/* Title section */}
        <div className="relative h-[200px]" data-aos="fade-up">
          <img
            className="absolute inset-0 w-[60%] h-[50%] object-cover mx-auto"
            src={
              "https://png.pngtree.com/png-clipart/20220925/original/pngtree-red-banner-ribbon-colorful-luxurious-with-golden-border-png-image_8631672.png"
            }
            alt=""
          />
          <h2 className="absolute text-sm md:text-lg lg:text-3xl py-6 md:py-4  lg:py-0 text-orange-200  font-bold top-[8%] left-[50%] transform -translate-x-1/2 ">
            Exclusive Recipe Offers Just for You!
          </h2>
          <p className="absolute text-center text-xs text-orange-300 font-bold top-[25%] left-[50%] transform -translate-x-1/2 hidden lg:block">
            Discover our collection of recipes, special ingredient bundles, and
            cookingclasses available for a limited time!
          </p>
        </div>

        {/* Offer Section */}
        <div className="offer-container overflow-y-auto items-center  border-8 border-white mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4 px-4">
          {/* left section*/}
          <div className="flex flex-col h-full gap-y-4" data-aos="fade-right">
            {/* Soup Offer */}
            <div className="flex flex-col sm:flex-row items-center gap-4 border-2 border-gray-300 p-4 bg-white shadow-md h-full">
              <Lottie className="w-40" animationData={soupanimation} loop />
              <div>
                <p className="font-semibold text-gray-700">
                  <span className="text-4xl text-red-700 font-bold">W</span>
                  arm up this winter with our exclusive hearty soup recipes.
                </p>
                <h3 className="pt-2 font-semibold text-black">
                  Limited-time offer: 30% off!
                </h3>
                <h3 className="font-semibold text-black">Ends in 2 days</h3>
              </div>
            </div>

            {/* Dessert Offer */}
            <div className="flex flex-col sm:flex-row items-center gap-4 border-2 border-gray-300 p-4 bg-white shadow-md h-full">
              <Lottie className="w-52" animationData={dessertanimation} loop />
              <div>
                <p className="font-semibold text-gray-700">
                  <span className="text-4xl text-red-700 font-bold">I</span>
                  ndulge in romantic desserts with our Valentine&apos;s special
                  bundle. Includes 5 premium recipes!
                </p>
                <h3 className="pt-2 font-semibold text-black">
                  Available until Feb 14!
                </h3>
                <h3 className="font-semibold text-black">
                  Valentine’s Day Desserts
                </h3>
              </div>
            </div>
          </div>

          {/* Middle Section */}
          <div
            className="flex flex-col justify-center items-center bg-red-900 text-white p-6 rounded-sm h-full"
            data-aos="zoom-in"
          >
            <Lottie className="w-40 mb-4" animationData={saleanimation} loop />
            <div className="text-center">
              <p className="font-semibold">
                <span className="text-5xl text-yellow-400 font-bold">L</span>
                earn to cook like a pro! Get a 50% discount on our live cooking
                masterclass for a limited time!
              </p>
              <h3 className="pt-2 text-gray-300 font-semibold">
                Limited slots available!
              </h3>
              <h3 className="text-gray-300 font-semibold">Join Now</h3>
            </div>
          </div>
          {/* Right section */}
          <div className="flex flex-col h-full gap-y-4" data-aos="fade-left">
            {/* Dish Offer */}
            <div className="flex flex-col sm:flex-row items-center gap-4 border-2 border-gray-300 p-4 bg-white shadow-md h-full">
              <Lottie className="w-36" animationData={dishanimation} loop />
              <div>
                <p className="font-semibold text-gray-700">
                  <span className="text-4xl text-red-700 font-bold">T</span>
                  ry our exclusive premium food recipe for free!
                </p>
                <h3 className="pt-2 font-semibold text-black">
                  Offer valid for Today
                </h3>
                <h3 className="font-semibold text-black">Sign up now!</h3>
              </div>
            </div>

            {/* Dinner Offer */}
            <div className="flex flex-col sm:flex-row items-center gap-4 border-2 border-gray-300 p-4 bg-white shadow-md h-full">
              <Lottie className="w-60" animationData={dinneranimation} loop />
              <div>
                <p className="font-semibold text-gray-700">
                  <span className="text-4xl text-red-700 font-bold">P</span>
                  lan the perfect family dinner with our 7-recipe bundle with
                  special price!
                </p>
                <h3 className="pt-2 font-semibold text-black">
                  Ends this Sunday!
                </h3>
                <h3 className="font-semibold text-black">Occasion Special</h3>
              </div>
            </div>
          </div>
        </div>
        {/* Divider */}
        <div
          className="divider divider-error mt-20 mb-0"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <img
            className="w-10 h-10 animate-bounce"
            src={pricetag}
            alt={pricetag}
          />
        </div>
      </Container>
    </div>
  );
};

export default SpecialOffer;
