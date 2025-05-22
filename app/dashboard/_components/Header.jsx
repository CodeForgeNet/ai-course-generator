import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-purple-100 via-pink-50 to-yellow-50 dark:from-gray-900 dark:via-gray-950 dark:to-purple-950 shadow-md backdrop-blur-md">
      <div className="flex justify-between items-center px-8 py-4">
        <div className="flex items-center gap-3">
          <Link href={"/dashboard"} className="flex items-center gap-2 group">
            <Image
              src={"/eduGenLogo.svg"}
              width={40}
              height={40}
              alt="EduGen logo"
              className="drop-shadow-lg transition-transform duration-300 hover:scale-110"
            />
            <span className="text-2xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 bg-clip-text text-transparent tracking-tight drop-shadow-sm">
              EduGen
            </span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <UserButton
            appearance={{
              elements: {
                avatarBox:
                  "ring-2 ring-purple-400 hover:ring-yellow-400 transition-all duration-200",
              },
            }}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
