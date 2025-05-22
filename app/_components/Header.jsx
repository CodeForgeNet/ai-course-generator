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
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-gradient-to-br from-purple-50 via-yellow-50 to-pink-50 dark:from-gray-900 dark:via-gray-950 dark:to-purple-950 shadow-2xl border-b border-purple-100 dark:border-gray-800">
        <div className="flex justify-between items-center px-8 py-4">
          <Link href={"/dashboard"} className="flex items-center gap-2 group">
            <Image
              src={"/eduGenLogo.svg"}
              alt="logo"
              width={40}
              height={40}
              className="transition-transform duration-300 group-hover:scale-105 group-hover:rotate-2 drop-shadow-lg"
              priority
            />
            <span className="hidden md:inline-block text-2xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 bg-clip-text text-transparent tracking-tight drop-shadow-md ml-2">
              EduGen
            </span>
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
        {/* Decorative gradient bar */}
        <div className="h-1 w-full bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-300 opacity-70" />
      </header>
    </>
  );
}

export default Header;
