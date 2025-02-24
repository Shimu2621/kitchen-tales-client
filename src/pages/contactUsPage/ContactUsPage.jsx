import { useRef } from "react";
import Lottie from "lottie-react";
import contactanimation from "../../../public/contactUs.json";
import Container from "../../utils/container/Container";
// import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

const ContactUsPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_yyb9uag", "template_9azk1jk", form.current, {
        publicKey: "AWxHBi51nIFNeJFVm",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="bg-orange-50">
      {/* Banner Section */}
      <div className="relative mb-10">
        <img
          src="https://burst.shopifycdn.com/photos/contact-us-flatlay.jpg?width=1000&format=pjpg&exif=0&iptc=0"
          className="w-full h-[40vh] md:h-[50vh] object-cover rounded-none shadow-lg"
          alt="Banner Image"
        />
        {/* opacity for shade */}
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-70 text-white">
          {/* text */}
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Contact Us</h2>
          <p className="md:text-2xl text-lg text-center font-bold px-4">
            We’d love to hear from you! Whether you have questions, feedback,
            connect with us today!
          </p>
        </div>
      </div>

      {/* Contact page section */}
      <div className="h-full min-h-screen max-w-full mx-auto">
        <Container>
          <h2 className="text-center text-3xl sm:text-5xl font-bold pt-10 sm:pt-15 text-orange-800">
            Get in Touch
          </h2>
          <p className="text-yellow-800 text-sm sm:text-base text-center pb-4 sm:pb-6">
            Have a question or feedback? Fill out the form below, and we&apos;ll
            get back to you!
          </p>
          <div className="flex flex-col md:flex-row items-center rounded-lg mx-auto h-auto gap-10 py-20">
            <div className="w-full md:w-[60%] h-[300px] sm:h-[400px] md:h-[600px] mx-auto">
              <Lottie
                className="w-full h-full"
                animationData={contactanimation}
                loop={true}
              />
            </div>
            {/* Form Section */}
            <div className="w-full md:w-[70%] max-w-xl p-10 py-16 px-8 h-auto  mb-2">
              <h2 className="text-orange-800 font-bold text-4xl items-center text-center ">
                Contact Us
              </h2>
              <form className="card-body" ref={form} onSubmit={sendEmail}>
                {/* Name */}
                <div className="form-control mb-4">
                  <label htmlFor="name" className="block text-orange-900">
                    Full name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    id="name"
                    placeholder="full name"
                    required
                    className="w-full p-3 input input-bordered border border-gray-100 rounded-md bg-slate-100 shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                {/* Email */}
                <div className="form-control mb-4">
                  <label htmlFor="email" className="block text-orange-900">
                    Email
                  </label>
                  <input
                    type="text"
                    name="user_email"
                    id="email"
                    placeholder="email"
                    required
                    className="w-full p-3 input input-bordered border border-gray-100 rounded-md shadow-md bg-slate-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                {/* Subject */}
                <div className="form-control mb-4">
                  <label htmlFor="name" className="block text-orange-900">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="to_subject"
                    id="subject"
                    placeholder="subject"
                    required
                    className="w-full p-3 input input-bordered border border-gray-100 rounded-md shadow-md bg-slate-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                {/* Message */}
                <div className="form-control mb-4">
                  <label htmlFor="name" className="block text-orange-900">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="message"
                    required
                    className="w-full p-3 border border-gray-100 rounded-md shadow-md bg-slate-100  focus:outline-none focus:ring-2 focus:ring-orange-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-800 text-white py-3 rounded-lg shadow-md font-bold hover:bg-orange-900 transition"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ContactUsPage;
