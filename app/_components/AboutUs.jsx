// import React from "react";
// import Header from "./Header";
// import Footer from "./Footer";
// import Head from "next/head";

// const AboutUs = () => {
//   return (
//     <>
//       <Header />
//       <Head>
//         <title>About Us | AI Course Generator</title>
//         <meta
//           name="description"
//           content="Learn about AI Course Generator, your ultimate tool for creating personalized AI courses."
//         />
//         <meta
//           name="keywords"
//           content="AI courses, course generator, artificial intelligence, personalized learning"
//         />
//         <link rel="canonical" href="https://www.yourwebsite.com/about-us" />
//       </Head>
//       <div className="container mx-auto px-4 py-8">
//         <h1 className="text-2xl font-bold mb-4">About Us</h1>
//         <p className="mb-4 text-xl">
//           Welcome to AI Course Generator, your ultimate tool for creating
//           personalized AI courses. Our mission is to simplify the learning
//           process by leveraging the power of artificial intelligence to provide
//           tailored educational experiences for users of all levels.
//         </p>
//         <p className="mb-4 text-xl">
//           At AI Course Generator, we believe that everyone should have access to
//           high-quality education. Our platform uses the Gemini API to generate
//           comprehensive course content that meets the needs of students and
//           professionals alike. Whether you are a beginner looking to learn the
//           basics of AI or an experienced practitioner seeking advanced topics,
//           we have something for you.
//         </p>
//         <p className="mb-4 text-xl">
//           Our team consists of passionate educators and AI enthusiasts dedicated
//           to enhancing the learning experience. We continually update our
//           courses to reflect the latest advancements in technology and
//           education, ensuring that our users receive the best possible
//           resources.
//         </p>
//         <p className="mb-4 text-lg">
//           Join us on this exciting journey and unlock the potential of AI in
//           your education!
//         </p>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default AboutUs;

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

const AboutUs = () => {
  return (
    <>
      <Header />
      <Head>
        <title>About Us | AI Course Generator</title>
        <meta
          name="description"
          content="Learn about AI Course Generator, your ultimate tool for creating personalized AI courses."
        />
        <meta
          name="keywords"
          content="AI courses, course generator, artificial intelligence, personalized learning"
        />
        <link rel="canonical" href="https://www.yourwebsite.com/about-us" />
      </Head>
      <main className="min-h-[70vh] bg-gradient-to-br from-purple-50 via-yellow-50 to-pink-50 dark:from-gray-900 dark:via-gray-950 dark:to-purple-950 flex flex-col items-center justify-center">
        <section className=" mt-5 mb-5 container mx-auto px-4 py-12 max-w-3xl rounded-2xl shadow-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-purple-100 dark:border-gray-800">
          <div className=" flex flex-col items-center mb-8">
            <span className="inline-block bg-gradient-to-r from-purple-500 via-pink-400 to-yellow-400 text-transparent bg-clip-text text-4xl font-extrabold mb-2 drop-shadow">
              About Us
            </span>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 rounded-full mb-2" />
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-xl">
              Empowering your AI learning journey with personalized, up-to-date
              courses for everyone.
            </p>
          </div>
          <div className="space-y-6 text-gray-700 dark:text-gray-200 text-lg leading-relaxed">
            <p>
              <span className="font-semibold text-purple-700 dark:text-yellow-300">
                Welcome to AI Course Generator
              </span>
              , your ultimate tool for creating personalized AI courses. Our
              mission is to simplify the learning process by leveraging the
              power of artificial intelligence to provide tailored educational
              experiences for users of all levels.
            </p>
            <p>
              At AI Course Generator, we believe that everyone should have
              access to high-quality education. Our platform uses the{" "}
              <span className="font-semibold text-pink-600 dark:text-yellow-200">
                Gemini API
              </span>{" "}
              to generate comprehensive course content that meets the needs of
              students and professionals alike. Whether you are a beginner
              looking to learn the basics of AI or an experienced practitioner
              seeking advanced topics, we have something for you.
            </p>
            <p>
              Our team consists of passionate educators and AI enthusiasts
              dedicated to enhancing the learning experience. We continually
              update our courses to reflect the latest advancements in
              technology and education, ensuring that our users receive the best
              possible resources.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {/* <span className="inline-block w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-yellow-300 flex items-center justify-center text-white text-2xl font-bold shadow-lg"> */}
              <span className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-yellow-300 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                🚀
              </span>
              <span className="text-lg font-semibold text-purple-700 dark:text-yellow-200">
                Join us on this exciting journey and unlock the potential of AI
                in your education!
              </span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutUs;
