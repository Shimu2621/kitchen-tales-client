/* eslint-disable react/prop-types */
"use client";

import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";

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
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto mb-4 border-4 border-orange-100 object-cover"
        />
        <StarRating rating={testimonial.rating} />
        <p className="text-gray-700 leading-relaxed mb-6 italic">
          &rdquo;{testimonial.quote}&rdquo;
        </p>
        <div>
          <h4 className="font-normal font-cursive text-xl text-red-800">
            {testimonial.name}
          </h4>
          <p className="text-gray-800 font-bold">{testimonial.role}</p>
          <p className="text-gray-500 text-sm">{testimonial.company}</p>
        </div>
      </CardContent>
    </Card>
  );
}

function FeaturedTestimonial({ testimonial }) {
  return (
    <div className="relative bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 rounded-3xl p-8 sm:p-12 md:p-16 text-center max-w-4xl mx-auto">
      <Quote className="w-12 h-12 md:w-16 md:h-16 text-orange-300 mx-auto mb-6" />
      <StarRating rating={testimonial.ratings || 5} />
      <blockquote className="text-lg sm:text-xl md:text-2xl font-medium text-gray-900 mb-8 leading-relaxed">
        &rdquo;{testimonial.quote}&rdquo;
      </blockquote>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <img
          src={testimonial.image || "/placeholder.svg"}
          alt={testimonial.name}
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-white shadow-lg object-cover"
        />
        <div className="text-center sm:text-left">
          <div className="font-bold text-gray-900 text-lg sm:text-xl">
            {testimonial.name}
          </div>
          <div className="text-orange-600 font-medium">{testimonial.role}</div>
          <div className="text-gray-600">{testimonial.company}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const featuredTestimonial = testimonials.find((t) => t.featured);
  const regularTestimonials = testimonials.filter((t) => !t.featured);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Title Section */}
      <section className="text-center py-12 sm:py-16 md:py-20">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-orange-800 mb-4">
          What our community says!
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-orange-500 max-w-xl mx-auto">
          Real reviews from real cooks who have tested and loved the recipes
          shared on our platform.
        </p>
      </section>

      {/* Featured Testimonial */}
      {featuredTestimonial && (
        <section className="py-10 md:py-16">
          <FeaturedTestimonial testimonial={featuredTestimonial} />
        </section>
      )}

      {/* Swiper Section */}
      <section className="py-10 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4">
          <Swiper
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
            className="testimonials-swiper"
          >
            {regularTestimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="max-w-[90vw] sm:max-w-[400px] mx-auto">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-orange-600 via-red-700 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to join our cooking community?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-orange-200 mb-12 max-w-3xl mx-auto leading-relaxed">
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
              className="border-2 border-white text-white bg-gradient-to-r from-orange-700 to-pink-700 hover:from-pink-700 hover:to-orange-700 text-lg px-8 py-4 rounded-full font-semibold transition-all duration-300"
            >
              Browse Recipes
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
