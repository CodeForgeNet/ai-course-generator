// import Head from "next/head";
// import React from "react";
// import Header from "./Header";
// import Footer from "./Footer";

// const TermsAndCondition = () => {
//   return (
//     <>
//       <Head>
//         <title>Terms and Conditions | AI Course Generator</title>
//         <meta
//           name="description"
//           content="Read the terms and conditions for using AI Course Generator services."
//         />
//         <meta
//           name="keywords"
//           content="terms and conditions, AI courses, legal"
//         />
//         <link
//           rel="canonical"
//           href="https://www.yourwebsite.com/terms-and-conditions"
//         />
//       </Head>
//       <Header />
//       <div className="container mx-auto px-4 py-8">
//         <h1 className="text-2xl font-bold mb-4">Terms and Conditions</h1>
//         <p className="mb-4">
//           Welcome to AI Course Generator! By accessing our website and using our
//           services, you agree to comply with and be bound by the following terms
//           and conditions. Please read them carefully.
//         </p>
//         <h2 className="text-lg font-semibold mb-2">1. Acceptance of Terms</h2>
//         <p className="mb-4">
//           By using our website, you confirm that you accept these terms and
//           conditions in full. If you do not agree with any part of these terms,
//           you must not use our website.
//         </p>
//         <h2 className="text-lg font-semibold mb-2">2. Use of Our Services</h2>
//         <p className="mb-4">
//           You agree to use our services only for lawful purposes and in a manner
//           that does not infringe the rights of, restrict, or inhibit anyone
//           else's use and enjoyment of our services.
//         </p>
//         <h2 className="text-lg font-semibold mb-2">3. Intellectual Property</h2>
//         <p className="mb-4">
//           All content, trademarks, and other intellectual property rights in the
//           website and its contents are owned by or licensed to AI Course
//           Generator. You may not reproduce, distribute, or exploit any part of
//           our website without our permission.
//         </p>
//         <h2 className="text-lg font-semibold mb-2">
//           4. Limitation of Liability
//         </h2>
//         <p className="mb-4">
//           AI Course Generator will not be liable for any direct, indirect, or
//           consequential loss or damage arising out of or in connection with your
//           use of our website and services.
//         </p>
//         <h2 className="text-lg font-semibold mb-2">5. Changes to Terms</h2>
//         <p className="mb-4">
//           We may update these terms and conditions from time to time. Your
//           continued use of the website following any changes will be deemed
//           acceptance of those changes.
//         </p>
//         <p className="mb-4">
//           If you have any questions about these terms, please contact us at{" "}
//           <strong>codeforgenet@icloud.com</strong>.
//         </p>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default TermsAndCondition;

import Head from "next/head";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const TermsAndCondition = () => {
  return (
    <>
      <Head>
        <title>Terms and Conditions | AI Course Generator</title>
        <meta
          name="description"
          content="Read the terms and conditions for using AI Course Generator services."
        />
        <meta
          name="keywords"
          content="terms and conditions, AI courses, legal"
        />
        <link
          rel="canonical"
          href="https://www.yourwebsite.com/terms-and-conditions"
        />
      </Head>
      <Header />
      <div className="min-h-screen flex flex-col">
        <main className="flex-1 bg-gradient-to-br from-purple-50 via-yellow-50 to-pink-50 dark:from-gray-900 dark:via-gray-950 dark:to-purple-950 flex flex-col items-center justify-center">
          <section className="container mx-auto px-4 py-12 max-w-3xl rounded-2xl shadow-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-purple-100 dark:border-gray-800 mt-8 mb-8">
            <div className="flex flex-col items-center mb-8">
              <span className="inline-block bg-gradient-to-r from-purple-500 via-pink-400 to-yellow-400 text-transparent bg-clip-text text-4xl font-extrabold mb-2 drop-shadow">
                Terms &amp; Conditions
              </span>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 rounded-full mb-2" />
              <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-xl">
                Please read our terms and conditions carefully before using AI
                Course Generator.
              </p>
            </div>
            <div className="space-y-6 text-gray-700 dark:text-gray-200 text-lg leading-relaxed">
              <p>
                Welcome to{" "}
                <span className="font-semibold text-purple-700 dark:text-yellow-300">
                  AI Course Generator
                </span>
                ! By accessing our website and using our services, you agree to
                comply with and be bound by the following terms and conditions.
                Please read them carefully.
              </p>
              <div>
                <h2 className="text-xl font-semibold mb-2 text-purple-700 dark:text-yellow-300">
                  1. Acceptance of Terms
                </h2>
                <p>
                  By using our website, you confirm that you accept these terms
                  and conditions in full. If you do not agree with any part of
                  these terms, you must not use our website.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2 text-purple-700 dark:text-yellow-300">
                  2. Use of Our Services
                </h2>
                <p>
                  You agree to use our services only for lawful purposes and in
                  a manner that does not infringe the rights of, restrict, or
                  inhibit anyone else's use and enjoyment of our services.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2 text-purple-700 dark:text-yellow-300">
                  3. Intellectual Property
                </h2>
                <p>
                  All content, trademarks, and other intellectual property
                  rights in the website and its contents are owned by or
                  licensed to AI Course Generator. You may not reproduce,
                  distribute, or exploit any part of our website without our
                  permission.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2 text-purple-700 dark:text-yellow-300">
                  4. Limitation of Liability
                </h2>
                <p>
                  AI Course Generator will not be liable for any direct,
                  indirect, or consequential loss or damage arising out of or in
                  connection with your use of our website and services.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2 text-purple-700 dark:text-yellow-300">
                  5. Changes to Terms
                </h2>
                <p>
                  We may update these terms and conditions from time to time.
                  Your continued use of the website following any changes will
                  be deemed acceptance of those changes.
                </p>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <span className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-yellow-300 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  📩
                </span>
                <span>
                  If you have any questions about these terms, please contact us
                  at{" "}
                  <a
                    href="mailto:codeforgenet@icloud.com"
                    className="underline text-purple-700 dark:text-yellow-200 font-semibold"
                  >
                    codeforgenet@icloud.com
                  </a>
                  .
                </span>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default TermsAndCondition;
