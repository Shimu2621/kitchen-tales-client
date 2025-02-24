import Lottie from "lottie-react";
import adminanimation from "../../../public/adminanimation.json";

const AdminHome = () => {
  return (
    <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl min-h-screen pt-10">
      <Lottie animationData={adminanimation} loop={true} />
      <h1 className="text-center text-4xl w-full font-bold text-blue-700">
        To Our Admin Dashboard
      </h1>
    </div>
  );
};

export default AdminHome;
