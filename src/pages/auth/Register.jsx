import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Lottie from "lottie-react";
import registeranimation from "../../../public/registeranimation.json";
// React icon
import { IoPerson } from "react-icons/io5";
import { FaCamera } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { AiFillHome } from "react-icons/ai";
import { Link, useNavigate } from "react-router";
import toast from "react-hot-toast";
import axios from "axios";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

// Form validation schema
const SignupSchema = yup.object().shape({
  fullName: yup.string().required("Full Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must include a special character"
    )
    .matches(/\d/, "Password must include a number"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
  userPhoto: yup.string().url("Invalid URL format"),

  address: yup.string().optional(),
  role: yup.string().default("user").oneOf(["user", "admin", "author"]),
});

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
    defaultValues: { role: "user" }, // Set default value
  });

  const onSubmit = async (data) => {
    console.log(data); // Form data passed by handleSubmit
    const { fullName, userPhoto, email, password, address } = data;

    const newUser = {
      fullName,
      userPhoto,
      email,
      password,
      address,
    };

    console.log(newUser);

    try {
      const response = await axios.post(
        "https://kitchen-tales-server.onrender.com/signup",
        newUser,
        { withCredentials: true }
      );
      console.log(response);
      navigate("/login");
      toast.success("You have Successfully Registered!");
    } catch (error) {
      console.log(error.response?.data || error.message);
      toast.error("Signup failed. Please try again.");
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
            Create an Account
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Full Name */}
            <div className="relative">
              <label className="block mb-1 text-gray-700">Full Name</label>
              <input
                type="text"
                {...register("fullName")}
                placeholder="Enter your name"
                className="w-full border-gray-300 rounded-md p-2 pl-10 bg-orange-100 focus:ring focus:ring-orange-300"
              />
              <IoPerson className="absolute left-3 top-10  text-gray-400" />
              {errors.fullName && (
                <p className="text-red-500 text-sm">
                  {errors.fullName.message}
                </p>
              )}
            </div>
            {/* Photo */}
            <div className="relative">
              <label className="block mb-1 text-gray-700">UserPhoto</label>
              <input
                type="text"
                {...register("userPhoto")}
                placeholder="Enter your imageURL"
                className="w-full border-gray-300 rounded-md p-2 pl-10 bg-orange-100 focus:ring focus:ring-orange-300"
              />
              <FaCamera className="absolute left-3 top-10  text-gray-400" />
            </div>
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
            {/* Confirm Password */}
            <div className="relative">
              <label className="block mb-1 text-gray-700">
                Confirm Password
              </label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                {...register("confirmPassword")}
                placeholder="Confirm password"
                className="w-full border-gray-300 rounded-md p-2 pl-10 bg-orange-100 focus:ring focus:ring-orange-300"
              />
              <RiLockPasswordFill className="absolute left-3 top-10 text-gray-400" />
              <button
                type="button"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="absolute right-4 top-2/3 transform -translate-y-1/2 text-gray-600"
              >
                {showConfirmPassword ? (
                  <EyeIcon className="h-5 w-5" />
                ) : (
                  <EyeSlashIcon className="h-5 w-5" />
                )}
              </button>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
            {/* Address */}
            <div className="relative">
              <label className="block mb-1 text-gray-700">Address</label>
              <input
                type="text"
                {...register("address")}
                placeholder="Enter your address"
                className="w-full border-gray-300 rounded-md p-2 pl-10 bg-orange-100 focus:ring focus:ring-orange-300"
              />
              <AiFillHome className="absolute left-3 top-10  text-gray-400" />
            </div>
            {/* Hidden Role Field */}
            {/* <input type="hidden" {...register("role")} value="user" /> */}

            <div className="pt-12">
              <button
                type="submit"
                className="w-full bg-orange-900 text-white py-2 rounded-md hover:bg-orange-700 transition duration-300"
              >
                Sign Up
              </button>
            </div>
          </form>
          <p className="mt-5 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-orange-800 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
