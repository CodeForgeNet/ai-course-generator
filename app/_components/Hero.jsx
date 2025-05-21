import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { HiChevronDoubleRight } from "react-icons/hi2";

function Hero() {
  return (
    <section className="bg-white lg:grid lg:place-content-center">
      <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
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
