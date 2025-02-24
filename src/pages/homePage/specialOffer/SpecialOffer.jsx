import Lottie from "lottie-react";
import soupanimation from "../../../../public/soupanimation.json";
import dessertanimation from "../../../../public/dessertanimation.json";
import saleanimation from "../../../../public/saleanimation.json";
import dishanimation from "../../../../public/dishanimation.json";
import dinneranimation from "../../../../public/dinneranimation.json";
import pricetag from "../../../../public/images/pricetag.png";
import Container from "../../../utils/container/Container";

const SpecialOffer = () => {
  return (
    <div className="bg-orange-50 pt-20 pb-20">
      <Container>
        <div className="relative h-[200px]">
          <img
            className="absolute inset-0 w-[60%] h-[50%] object-cover mx-auto"
            src={
              "https://png.pngtree.com/png-clipart/20220925/original/pngtree-red-banner-ribbon-colorful-luxurious-with-golden-border-png-image_8631672.png"
            }
            alt=""
          />
          {/* Title section */}
          <h2 className="absolute text-3xl text-orange-200 font-bold top-[7%] left-[50%] transform -translate-x-1/2 ">
            Exclusive Recipe Offers Just for You!
          </h2>
          <p className="absolute text-center text-xs text-orange-300 font-bold top-[23%] left-[50%] transform -translate-x-1/2">
            Discover our handpicked collection of recipes, special ingredient
            bundles, and cooking masterclasses
            <br /> available for a limited time!
          </p>
        </div>
        {/* Offer Section */}
        <div className="offer-container overflow-y-auto items-center  border-8 border-white mx-auto grid grid-cols-3 shadow-lg pt-2 pb-4">
          {/* left section (Top) */}
          <div>
            <div className="flex justify-center items-center m-4 border-2 border-gray-300 mr-4  py-4 gap-2 ">
              <Lottie
                className="w-[200px] h-auto"
                animationData={soupanimation}
                loop={true}
              />
              <div className="flex flex-col">
                <p className="font-semibold">
                  <span className="text-4xl text-red-700 font-bold">W</span>
                  arm up this winter with our exclusive hearty soup recipes.
                </p>
                <h3 className="pt-2 text-black font-semibold">
                  Limited-time offer: 30% off!
                </h3>
                <h3 className="text-black font-semibold ">Ends in 2 days</h3>
              </div>
            </div>
            {/* left section (bottom) */}
            <div className="flex justify-center items-center  border-2 m-4 border-gray-300 mr-4 mb-1 py-4 gap-4 ">
              <Lottie
                className="w-[240px] h-auto"
                animationData={dessertanimation}
                loop={true}
              />
              <div className="flex flex-col">
                <p className="font-semibold ">
                  <span className="text-4xl text-red-700 font-bold">I</span>
                  ndulge in romantic desserts with our Valentine&#39;s special
                  bundle. Includes 5 premium recipes!
                </p>
                <h3 className="pt-2 text-black font-semibold">
                  Available until Feb 14!
                </h3>
                <h3 className="text-black font-semibold ">
                  Valentine&lsquo;s Day Desserts
                </h3>
              </div>
            </div>
          </div>
          {/* Middle Section */}
          <div className="flex flex-col justify-center items-center   border-gray-300 bg-red-900 px-4 py-5 mt-2 ">
            <Lottie
              className="w-[160px] h-[166px]"
              animationData={saleanimation}
              loop={true}
            />
            <div className="flex flex-col">
              <p className="font-semibold text-white">
                <span className="text-5xl text-yellow-400 p-1 font-bold">
                  L
                </span>
                earn to cook like a pro! Get a 50% discount on our live cooking
                masterclass for a limited time.!
              </p>
              <h3 className="pt-2 text-gray-400 font-semibold">
                Limited slots available!
              </h3>
              <h3 className="text-gray-400 font-semibold pb-4 ">Join Now</h3>
            </div>
          </div>
          {/* Right section (Top) */}
          <div>
            <div className="flex justify-center items-center m-4 border-2 border-gray-300 mr-5 px-3  py-4 gap-4 ">
              <Lottie
                className="w-[140px] h-auto"
                animationData={dishanimation}
                loop={true}
              />
              <div className="flex flex-col">
                <p className="font-semibold">
                  <span className="text-4xl text-red-700 font-bold">T</span>
                  ry our exclusive premium food recipe for free!
                </p>
                <h3 className="text-black pt-2 font-semibold ">
                  Offer valid for Today
                </h3>
                <h3 className=" text-black font-semibold">Sign up now!</h3>
              </div>
            </div>
            {/* Right section (bottom) */}
            <div className="flex justify-center items-center  border-2 m-4 border-gray-300 mr-4 mb-1 py-4 gap-4 shadow-lg">
              <Lottie
                className="w-[250px] h-auto"
                animationData={dinneranimation}
                loop={true}
              />
              <div className="flex flex-col">
                <p className="font-semibold ">
                  <span className="text-4xl text-red-700 font-bold">P</span>
                  lan the perfect family dinner with our 7-recipe bundle with
                  special price!
                </p>
                <h3 className="pt-2 text-black font-semibold">
                  Ends this Sunday!
                </h3>
                <h3 className="text-black font-semibold ">Occasion Special</h3>
              </div>
            </div>
          </div>
        </div>
        {/* Divider */}
        <div className="divider divider-error mt-20">
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
