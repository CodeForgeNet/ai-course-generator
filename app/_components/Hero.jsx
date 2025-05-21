"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { HiChevronDoubleRight } from "react-icons/hi2";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-50 min-h-[90vh] flex items-center">
      {/* Decorative blurred shape */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-gradient-to-tr from-purple-300 via-pink-200 to-yellow-200 rounded-full blur-3xl opacity-60 pointer-events-none z-0" />
      <div className="mx-auto w-full max-w-3xl px-4 py-20 sm:px-6 lg:px-8 z-10 relative text-center">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
          <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 bg-clip-text text-transparent drop-shadow-lg">
            EduGen
          </span>
          <span className="block text-2xl sm:text-3xl font-semibold text-gray-700 mt-2">
            AI-Powered Learning
          </span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-700 font-medium max-w-2xl mx-auto">
          Revolutionizing education for a new era of learning.
          <br />
          <span className="text-purple-700 font-semibold">
            Personalized, interactive, and powered by AI.
          </span>
        </p>
        <p className="mt-4 text-base text-gray-600 sm:text-lg/relaxed">
          EduGen is an innovative platform that harnesses the power of AI to
          transform the way we learn. With personalized learning experiences,
          interactive content, and real-time feedback, EduGen empowers learners
          to reach their full potential.
        </p>
        <div className="mt-12 flex justify-center">
          <Link href={"/dashboard/explore"}>
            <Button
              size="lg"
              className="flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-400 to-yellow-400 text-white px-8 py-3 rounded-full shadow-xl font-semibold text-lg transition-all duration-200 hover:from-purple-600 hover:to-yellow-500 hover:scale-105 focus:ring-2 focus:ring-purple-300 animate-bounce-slow"
            >
              Explore Now
              <HiChevronDoubleRight className="text-2xl" />
            </Button>
          </Link>
        </div>
      </div>
      {/* Optional: Add more decorative shapes for extra flair */}
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-br from-yellow-200 via-pink-200 to-purple-200 rounded-full blur-2xl opacity-50 pointer-events-none z-0" />
      <style jsx>{`
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2.5s infinite;
        }
      `}</style>
    </section>
  );
}

export default Hero;
