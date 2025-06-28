/* eslint-disable react/prop-types */
"use client";

import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
// Import required modules
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    id: 1,
    name: "Pamela Davis",
    company: "Recipe Author",
    image:
      "https://t3.ftcdn.net/jpg/04/97/66/28/360_F_497662812_7rGW6PMBJR9AbrKcGgN5S1luXYTjH92i.jpg",
    role: "Professional Chef",
    rating: 4,
    quote:
      "As a chef who shares recipes here, I love how engaged the community is. The feedback I get helps me improve my recipes, and seeing people recreate my dishes brings me so much joy.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    company: "Food Enthusiast",
    image:
      "https://johngress.com/wp-content/uploads/2024/08/LinkedIn-profile-photos-in-Chicago-Sarah-1054_1200.jpg",
    role: "Home Cook",
    rating: 5,
    quote:
      "Kitchen Tales has completely transformed my approach to cooking. The detailed recipes and supportive community have helped me discover flavors and techniques I never thought possible. Every dish tells a story!",
  },
  {
    id: 3,
    name: "Chef Marco Rodriguez",
    company: "Family Cook",
    image:
      "https://t3.ftcdn.net/jpg/03/77/30/16/360_F_377301660_ClhyVNc3ThqShLjkfk7zq0SeCenc4xb7.jpg",
    role: "Professional Chef",
    rating: 5,
    quote:
      "As a professional chef, I appreciate the platform's focus on authentic storytelling. Kitchen Tales allows me to share not just recipes, but the passion and culture behind each dish with food enthusiasts worldwide.",
  },
  {
    id: 4,
    name: "Emily Chen",
    company: "Recipe Creator",
    image:
      "https://c4.wallpaperflare.com/wallpaper/143/976/45/women-face-black-background-portrait-wallpaper-preview.jpg",
    role: "Food Blogger",
    rating: 4,
    quote:
      "The storytelling aspect of Kitchen Tales sets it apart from other recipe platforms. Every recipe has a narrative that creates genuine connections between cooks and their audience. It's truly inspiring!",
  },
  {
    id: 5,
    name: "David Thompson",
    company: "Cooking Student",
    image:
      "https://media.istockphoto.com/id/1283710598/photo/executive-businessman-studio-portrait.jpg?s=612x612&w=0&k=20&c=8fOAmSgWhEBd6jbEgmZdPYyGWESNFep3Zwz4i6LgGGM=",
    role: "Weekend Warrior",
    rating: 5,
    quote:
      "I went from struggling with basic cooking to creating restaurant-quality meals thanks to Kitchen Tales. The step-by-step guidance and video tutorials have been absolute game-changers for my culinary journey.",
  },
  {
    id: 6,
    name: "Marathon Laris",
    company: "Dessert Lover",
    image:
      "https://media.istockphoto.com/id/1051185180/photo/stubble-guy.jpg?s=612x612&w=0&k=20&c=vf3qNeQLMdnkzHqHmxX88P1zRq3-7guAu1a-f9qpQNk=",
    role: "Weekend Warrior",
    rating: 5,
    quote:
      "I went from struggling with basic cooking to creating restaurant-quality meals thanks to Kitchen Tales. The step-by-step guidance and video tutorials have been absolute game-changers for my culinary journey.",
  },
];

// const categories = [
//   { name: "Quick Meals", emoji: "⚡" },
//   { name: "Desserts", emoji: "🍰" },
//   { name: "Healthy Options", emoji: "🥗" },
//   { name: "International", emoji: "🌍" },
//   { name: "Vegetarian", emoji: "🥬" },
//   { name: "Baking", emoji: "🍞" },
// ];

function StarRating({ rating }) {
  return (
    <div className="flex gap-1 justify-center mb-4">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial }) {
  return (
    <Card className="h-full mx-2 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardContent className="p-8 text-center">
        <img
          src={testimonial.image || "/placeholder.svg"}
          alt={testimonial.name}
          width={80}
          height={80}
          className="rounded-full mx-auto mb-4 border-4 border-orange-100"
        />
        <StarRating rating={testimonial.rating} />
        <p className="text-gray-700 leading-relaxed mb-6 italic">
          &rdquo;{testimonial.quote}&rdquo;
        </p>
        <div>
          <h4 className="font-bold text-gray-900 text-lg">
            {testimonial.name}
          </h4>
          <p className="text-orange-600 font-medium">{testimonial.role}</p>
          <p className="text-gray-500 text-sm">{testimonial.company}</p>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Testimonials() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // const featuredTestimonial = testimonials.find((t) => t.featured);
  const regularTestimonials = testimonials.filter((t) => !t.featured);

  return (
    <div className="min-h-screen bg-orange-50">
      {/* Main Testimonials Slider */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-[200px]" data-aos="fade-up">
            <img
              className="absolute inset-0 w-[60%] h-[50%] object-cover mx-auto"
              src={
                "https://png.pngtree.com/png-clipart/20220925/original/pngtree-red-banner-ribbon-colorful-luxurious-with-golden-border-png-image_8631672.png"
              }
              alt=""
            />
            <h2 className="absolute text-sm md:text-lg lg:text-3xl py-6 md:py-4  lg:py-0 text-orange-200  font-bold top-[8%] left-[50%] transform -translate-x-1/2 ">
              What our community says!
            </h2>
            <p className="absolute text-center text-xs text-orange-300 font-bold top-[25%] left-[50%] transform -translate-x-1/2 hidden lg:block">
              Real reviews from real cooks who have tried, tested, and loved the
              recipes shared on our platform!
            </p>
          </div>

          <Swiper
            data-aos="zoom-in"
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="testimonials-swiper"
          >
            {regularTestimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} style={{ width: "400px" }}>
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Additional Testimonials - Card Style */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              More success stories
            </h2>
            <p className="text-xl text-gray-600">
              See how home cooks and professional chefs are creating amazing
              meals with our recipes.
            </p>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="simple-testimonials-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section> */}

      {/* CTA Section */}
      <section
        className="py-20 md:py-32 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to join our cooking community?
          </h2>
          <p className="text-xl text-orange-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Start sharing your recipes, discover new dishes, and connect with
            fellow food enthusiasts from around the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Share Your Recipe
            </Button>
            <Button
              size="lg"
              // variant="outline"
              className="border-2 border-white text-white bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 hover:bg-gradient-to-r hover:from-pink-600 hover:via-red-600 hover:to-orange-600 text-lg px-8 py-4 rounded-full font-semibold transition-all duration-300"
            >
              Browse Recipes
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
