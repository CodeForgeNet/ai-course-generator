import { Button } from "@/components/ui/button";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RxGithubLogo } from "react-icons/rx";

function Header() {
  return (
    <>
      <Head>
        <title>
          EduGen : AI Course Generator - Create Personalized AI Courses
        </title>
        <meta name="description" content="EduGen: AI-Powered Learning" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/60 shadow-lg">
        <div className="flex justify-between items-center px-8 py-4">
          <Link href={"/dashboard"} className="flex items-center gap-2 group">
            <Image
              src={"/eduGen.svg"}
              alt="logo"
              width={150}
              height={100}
              className="transition-transform duration-300 group-hover:scale-105 group-hover:rotate-2"
              priority
            />
          </Link>

          <div className="flex items-center gap-8">
            <Link
              href="https://github.com/CodeForgeNet/ai-course-generator"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-200 hover:scale-110"
              aria-label="GitHub Repository"
            >
              <RxGithubLogo className="text-3xl text-[rgb(125,54,137)] hover:text-[rgb(199,59,238)] transition-colors drop-shadow-md" />
            </Link>

            <Link href="/dashboard">
              <Button className="bg-gradient-to-r from-purple-500 via-pink-400 to-yellow-400 text-white px-6 py-2 rounded-full shadow-lg font-semibold transition-all duration-200 hover:from-purple-600 hover:to-yellow-500 hover:scale-105 focus:ring-2 focus:ring-purple-300">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
