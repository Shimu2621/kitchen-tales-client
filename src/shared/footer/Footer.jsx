import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter subscription submitted:", email);
    setEmail("");
    alert("Thank you for subscribing!");
  };

  return (
    <footer className="relative text-white  overflow-hidden bg-black">
      {/* Banner Section */}
      <div className="relative">
        {/* Wrapper to control height */}
        <div className="relative w-full h-[700px] md:h-[600px] lg:h-[500px] xl:h-[500px]">
          <img
            src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAxL3Jhd3BpeGVsX29mZmljZV8zNF9jbG9zZV91cF9waG90b19vZl9jaGVmX2lzX3ByZXBhcmF0aW9uX29mX3RoZV85ZWQ2NTdiMy1jMTQyLTRmMzktYjZiOS05NGYwNWUyZGY1M2FfMS5qcGc.jpg"
            className="absolute inset-0 w-full h-full object-cover"
            alt="Footer Banner"
          />
          <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-center ">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Logo */}
                <div className="flex flex-col items-center md:items-start">
                  <img
                    src="https://img.freepik.com/premium-vector/illustration-cooking-logo-solid-background_852896-5187.jpg?w=360"
                    alt="Logo"
                    className="h-24 w-24 rounded-full object-contain block"
                  />
                  <p className="mt-4 text-orange-500 font-bold text-lg font-cursive">
                    Kitchen Tales
                  </p>
                </div>

                {/* Links */}
                <div>
                  <h3 className="text-xl font-bold text-orange-200 mb-4">
                    Important Pages
                  </h3>
                  <ul className="space-y-2 text-sm">
                    {[
                      "Home",
                      "Recipes",
                      "Blog",
                      "About Us",
                      "Contact Us",
                      "Login",
                    ].map((text) => (
                      <li key={text}>
                        <a
                          href={`/${text.replace(/ /g, "").toLowerCase()}`}
                          className="hover:underline"
                        >
                          {text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Social Icons */}
                <div>
                  <h3 className="text-xl font-bold text-orange-200 mb-4">
                    Follow Us
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-800 p-2 rounded-full"
                    >
                      <FaFacebook size={24} />
                    </a>
                    <a
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-pink-600 hover:bg-pink-800 p-2 rounded-full"
                    >
                      <FaInstagram size={24} />
                    </a>
                    <a
                      href="https://www.twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-800 p-2 rounded-full"
                    >
                      <AiFillTwitterCircle size={24} />
                    </a>
                    <a
                      href="https://www.youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-red-600 hover:bg-red-800 p-2 rounded-full"
                    >
                      <FaYoutube size={24} />
                    </a>
                  </div>
                </div>

                {/* Contact Info */}
                <div>
                  <h3 className="text-xl font-bold text-orange-200 mb-4">
                    Contact Us
                  </h3>
                  <p className="text-sm">
                    <span className="font-bold">Email:</span>{" "}
                    contact@website.com
                  </p>
                  <p className="text-sm">
                    <span className="font-bold">Phone:</span> +123-456-7890
                  </p>
                  <p className="text-sm">
                    <span className="font-bold">Address:</span> 123 Main St,
                    Orlando, FL, USA
                  </p>
                </div>
              </div>
            </div>
            {/* Newsletter Section */}
            <div className="pt-10">
              <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                  <h3 className="text-xl font-bold mb-4 text-center text-orange-200">
                    Subscribe to Our Newsletter
                  </h3>

                  <form
                    onSubmit={handleNewsletterSubmit}
                    className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
                  >
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 bg-white text-gray-900 border-0 h-12 text-base px-4 rounded-md outline-none"
                      required
                    />
                    <button
                      type="submit"
                      className="bg-orange-700 hover:bg-orange-500 text-white h-12 px-8 font-semibold rounded-md transition-colors"
                    >
                      Subscribe
                    </button>
                  </form>
                  <p className="text-sm text-center text-orange-100 mt-4">
                    Join 50,000+ food lovers. Unsubscribe anytime.
                  </p>
                </div>

                <div className="mt-6 text-center border-t border-orange-100 pt-4 text-sm text-orange-100">
                  <p>
                    &copy; {new Date().getFullYear()} Kitchen Tales. All rights
                    reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
