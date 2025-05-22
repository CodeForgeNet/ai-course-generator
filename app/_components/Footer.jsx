"use client";
import { FaLinkedin } from "react-icons/fa6";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const menu = [
    { id: 1, name: "About Us", path: "/about" },
    { id: 2, name: "Terms & Conditions", path: "/terms" },
  ];
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-50 py-2 mt-auto w-full">
      {/* Decorative blurred shapes */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-tr from-purple-300 via-pink-200 to-yellow-200 rounded-full blur-3xl opacity-40 pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-br from-yellow-200 via-pink-200 to-purple-200 rounded-full blur-2xl opacity-40 pointer-events-none z-0" />

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center gap-6">
        {/* Brand */}
        <Link
          href="/"
          className="mt-2 text-xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 bg-clip-text text-transparent drop-shadow-lg tracking-tight"
        >
          EduGen
        </Link>
        {/* Menu */}
        <nav>
          <ul className="flex flex-wrap justify-center gap-8 text-base font-medium">
            {menu.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.path}
                  className="text-gray-700 dark:text-gray-300 hover:text-purple-700 dark:hover:text-yellow-300 transition-colors duration-200"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* Socials */}
        <div className="flex gap-6 justify-center ">
          <a
            href="https://github.com/CodeForgeNet"
            target="_blank"
            rel="noreferrer"
            className="text-gray-700 dark:text-gray-200 hover:text-purple-700 dark:hover:text-yellow-300 transition-colors text-2xl"
            aria-label="GitHub"
          >
            <svg
              className="w-7 h-7"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/lalu-kumar/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-700 dark:text-gray-200 hover:text-purple-700 dark:hover:text-yellow-300 transition-colors text-2xl"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
        {/* Divider */}
        <div className="w-2/3 h-px bg-gradient-to-r from-purple-300 via-pink-200 to-yellow-200 opacity-60" />
        {/* Copyright */}
        <span className="text-xs text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} EduGen. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
