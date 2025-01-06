import React from "react";
import Header from "@/app/components/Header";
import Footer from "../components/Footer";

const JackHomePage = () => {
  return (
    <div className="relative w-full h-screen flex flex-col sm:max-w-[390px] sm:mx-auto sm:shadow bg-white">
      <main>
        {/* Header */}
        <Header />

        {/* Content */}
        <div className="flex flex-col bg-gray-800 rounded-lg shadow-lg p-6 max-w-sm w-full">
            <h1>asvdausvdas</h1>
        </div>

        {/* Footer Navigation */}
        <Footer />
      </main>
    </div>
  );
};

export default JackHomePage;
