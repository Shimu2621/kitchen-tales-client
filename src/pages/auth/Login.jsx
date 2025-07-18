import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Lottie from "lottie-react";
import registeranimation from "../../../public/registeranimation.json";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
// React icon
import { FaEnvelope } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import axios from "axios";

// Yup validation schema
const loginSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  // Using useForm hook with Yup resolver
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    const { email, password } = data;
    const user = { email, password };
    console.log(user);

    try {
      const response = await axios.post(
        "https://kitchen-tales-server.onrender.com/signin",
        user,
        {
          withCredentials: true,
        }
      );
      console.log(response);
      if (response.data.status === "Success") {
        toast.success("You Have Login Successfully!");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      toast.error("Login failed! Please check your credentials.");
    }
  };
  return (
    <div className="min-h-screen p-10 bg-orange-50 ">
      <div className="flex flex-col md:flex-row items-center justify-center rounded-sm bg-orange-100">
        <div className="w-full md:w-1/2 flex justify-center">
          <Lottie
            height={300}
            width={300}
            // className="w-full h-[70vh]"
            animationData={registeranimation}
            loop={true}
          />
        </div>

        {/* Register Form */}
        <div className="w-full md:w-1/2 bg-orange-50 rounded-md p-8 px-10 py-10 m-10 shadow-sm ">
          <h2 className="text-4xl font-bold text-red-900 mb-6 text-center">
            Login to Your Account
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Email */}
            <div className="relative">
              <label className="block mb-1 text-gray-700">Email</label>
              <input
                type="email"
                {...register("email")}
                placeholder="Enter your email"
                className="w-full border-gray-300 rounded-md p-2 pl-10 bg-orange-100 focus:ring focus:ring-orange-300"
              />
              <FaEnvelope className="absolute left-3 top-10  text-gray-400" />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
            {/* Password */}
            <div className="relative">
              <label className="block mb-1 text-gray-700">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                {...register("password")}
                placeholder="Enter your password"
                className="w-full border-gray-300 rounded-md p-2 pl-10 bg-orange-100 focus:ring focus:ring-orange-300"
              />
              <RiLockPasswordFill className="absolute left-3 top-10 text-gray-400" />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-4 top-2/3 transform -translate-y-1/2 text-gray-600"
              >
                {showPassword ? (
                  <EyeIcon className="h-5 w-5" />
                ) : (
                  <EyeSlashIcon className="h-5 w-5" />
                )}
              </button>
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="pt-12">
              <button
                type="submit"
                className="w-full bg-orange-900 text-white py-2 rounded-md hover:bg-orange-700 transition duration-300"
              >
                Log In
              </button>
            </div>
          </form>
          {/* Signup Link */}
          <div className="mt-4 text-center text-sm text-gray-500">
            Don&apos;t have an account?{" "}
            <button
              onClick={() => navigate("/register")}
              className="text-orange-800 font-semibold hover:underline"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
