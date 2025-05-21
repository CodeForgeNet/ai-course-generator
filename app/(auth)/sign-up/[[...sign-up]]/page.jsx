import { SignUp } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex min-h-screen">
      {/* Left Side */}
      <div className="relative hidden w-1/2 lg:flex">
        {/* Background image */}
        <Image
          src="/gate-dark.jpg"
          alt="Gas Station"
          fill
          className="object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Text Content */}
        <div className="relative z-10 flex flex-col justify-end p-12 text-white">
          <div className="flex items-center gap-3 mb-4">
            {/* Logo */}
            <div className="bg-white p-2 rounded-full">
              <Image src="/wave.svg" alt="Logo" width={32} height={32} />
            </div>
            <h1 className="text-2xl font-bold">Welcome to New Generation</h1>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex w-full lg:w-1/2 items-center justify-center bg-white p-6">
        <SignUp />
      </div>
    </div>
  );
}
