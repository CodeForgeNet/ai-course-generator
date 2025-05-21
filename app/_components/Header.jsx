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
      <div className="flex justify-between p-5 shadow-sm">
        <Link href={"/"} className="flex justify-center items-center gap-2">
          <Image src={"/eduGen.svg"} alt="logo" width={150} height={100} />
        </Link>

        <div className="flex justify-center items-center gap-10 cursor-pointer">
          <Link href={"https://github.com/CodeForgeNet/ai-course-generator"}>
            <RxGithubLogo className="text-3xl" />
          </Link>

          <Link href={"/dashboard"}>
            <Button className="custom-button px-4 py-2 rounded">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
