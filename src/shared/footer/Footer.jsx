import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white ">
      {/* Banner Section */}
      <div className="relative ">
        <img
          src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAxL3Jhd3BpeGVsX29mZmljZV8zNF9jbG9zZV91cF9waG90b19vZl9jaGVmX2lzX3ByZXBhcmF0aW9uX29mX3RoZV85ZWQ2NTdiMy1jMTQyLTRmMzktYjZiOS05NGYwNWUyZGY1M2FfMS5qcGc.jpg"
          className="w-full h-[40vh] md:h-[70vh] object-cover rounded-none"
          alt="Banner Image"
        />
        {/* opacity for shade */}
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-80 text-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Logo Container */}
              <div className="relative w-[140px] h-[14vh]  items-center text-lg mt-0 ">
                <img
                  src="https://img.freepik.com/premium-vector/illustration-cooking-logo-solid-background_852896-5187.jpg?w=360"
                  alt="Logo"
                  className="h-32 w-32 object-contain rounded-full "
                />
                <p className="absolute top-[75px] left-2 text-center font-bold text-sm lg:text-xl  text-orange-700 mt-16 font-cursive">
                  Kitchen Tales
                </p>
              </div>
              {/* Important Links */}
              <div>
                <h3 className="text-xl font-bold text-orange-200 mb-4">
                  Important Pages
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/" className="hover:underline">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/recipes" className="hover:underline">
                      Recipes
                    </a>
                  </li>
                  <li>
                    <a href="/blog" className="hover:underline">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="hover:underline">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="hover:underline">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="/login" className="hover:underline">
                      Login
                    </a>
                  </li>
                </ul>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-bold text-orange-200 mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white hover:bg-blue-800 bg-blue-600 rounded-full p-2"
                  >
                    <FaFacebook size={24} />
                  </a>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white hover:bg-pink-800 bg-pink-600 rounded-full p-2"
                  >
                    <FaInstagram size={24} />
                  </a>
                  <a
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white hover:bg-blue-800 bg-blue-600 rounded-full p-2"
                  >
                    <AiFillTwitterCircle size={24} />
                  </a>

                  <a
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white hover:bg-red-800 bg-red-600 rounded-full p-2"
                  >
                    <FaYoutube size={24} />
                  </a>
                </div>
              </div>

              {/* Contact Details */}
              <div>
                <h3 className="text-xl font-bold text-orange-200 mb-4">
                  Contact Us
                </h3>
                <p>Email: contact@website.com</p>
                <p>Phone: +123-456-7890</p>
                <p>Address: 123 Main St, Orlando, FL, USA</p>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">
                Subscribe to Our Newsletter
              </h3>
              <form className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full md:w-2/3 p-2 rounded-md border border-gray-300 text-gray-700"
                />
                <button
                  type="submit"
                  className="bg-orange-900 hover:bg-orange-700 text-white py-2 px-4 rounded-md"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Copyright */}
            <div className="mt-8 text-center border-t border-gray-700 pt-4">
              <p>
                &copy; {new Date().getFullYear()} OurWebsite. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
