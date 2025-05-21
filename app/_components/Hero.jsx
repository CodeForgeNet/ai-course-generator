import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { HiChevronDoubleRight } from "react-icons/hi2";

function Hero() {
  return (
    <section className="relative bg-purple-100 overflow-hidden lg:grid lg:place-content-center">
      {/* Top gradient fade for smooth transition */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-white to-transparent z-20 pointer-events-none" />

      {/* Animated Blurred Circles SVG */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
        width="100%"
        height="100%"
        viewBox="0 0 1440 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <circle>
            <animate
              attributeName="cx"
              values="200;400;200"
              dur="8s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="cy"
              values="200;300;200"
              dur="10s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="r"
              values="180;220;180"
              dur="7s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.3;0.5;0.3"
              dur="6s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="fill"
              values="#C73BEE;#7D3689;#C73BEE"
              dur="12s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="900" cy="400" r="140" fill="#7D3689" opacity="0.25">
            <animate
              attributeName="cy"
              values="400;350;400"
              dur="9s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="r"
              values="140;180;140"
              dur="8s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.25;0.4;0.25"
              dur="7s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="1200" cy="150" r="100" fill="#C73BEE" opacity="0.18">
            <animate
              attributeName="cx"
              values="1200;1100;1200"
              dur="10s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="r"
              values="100;140;100"
              dur="9s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.18;0.3;0.18"
              dur="8s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
        <filter id="blurMe">
          <feGaussianBlur stdDeviation="60" />
        </filter>
        <g filter="url(#blurMe)">
          <circle cx="200" cy="200" r="180" fill="#C73BEE" opacity="0.3" />
          <circle cx="900" cy="400" r="140" fill="#7D3689" opacity="0.25" />
          <circle cx="1200" cy="150" r="100" fill="#C73BEE" opacity="0.18" />
        </g>
      </svg>

      <div className="relative z-10 mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-prose text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            <strong className="text-[rgb(125,54,137)]">
              {" "}
              EduGen: AI-Powered Learning
            </strong>
            <br />
            Revolutionizing Education for a New Era of Learning
          </h1>

          <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
            EduGen is an innovative platform that harnesses the power of AI to
            transform the way we learn. With personalized learning experiences,
            interactive content, and real-time feedback, EduGen empowers
            learners to reach their full potential.
            <br />
          </p>

          <div className="mt-40 flex flex-wrap justify-center gap-4 cursor-pointer">
            <Link href={"/dashboard/explore"}>
              <Button
                variant="startButton"
                size="lg"
                className="flex items-center gap-2 bg-[rgb(135,59,149)] text-primary-foreground shadow-xs hover:bg-[rgb(199,59,238)]"
              >
                Explore Now.
                <HiChevronDoubleRight className="text-xl" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
