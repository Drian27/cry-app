import React from "react";
import Image from "next/image";
import Header from "@/app/components/Header";
import Footer from "../components/Footer";
import ExclamationProviders from "../auth/social-providers/ExclamationProviders";

const JackHomePage = () => {
  return (
    <div className="relative w-full h-screen flex flex-col sm:max-w-[390px] sm:mx-auto sm:shadow bg-white">
      <main>
        {/* Header */}
        <Header />

        {/* Content */}
        <section className="flex gap-4 bg-[#232d3b] p-4">
          <div className="bg-[#2c3647] rounded-lg p-4 text-center w-40">
            <div className="text-orange-400 text-sm mb-2 font-semibold">
              Earn per tap
            </div>
            <div className="flex justify-center items-center gap-2 text-white text-lg font-bold">
              <Image
                src="/coin-icon.png"
                alt="Coin Icon"
                width={20}
                height={20}
                className="w-5 h-5"
              />
              +12
            </div>
          </div>

          <div className="bg-[#2c3647] rounded-lg p-4 text-center w-40">
            <div className="text-purple-500 text-sm mb-2 font-semibold">
              Coins to level up
            </div>
            <div className="text-white text-lg font-bold">10 M</div>
          </div>

          <div className="bg-[#2c3647] rounded-lg p-4 text-center w-40">
            <div className="text-green-400 text-sm mb-2 font-semibold">
              Profit per hour
            </div>
            <div className="flex justify-center items-center gap-2 text-white text-lg font-bold">
              <Image
                src="/coin-icon.png"
                alt="Coin Icon"
                width={20}
                height={20}
                className="w-5 h-5"
              />
              +636.31K
              <span className="text-sm bg-gray-600 text-white rounded-full px-2 py-1 cursor-pointer">
                <ExclamationProviders />
              </span>
            </div>
          </div>
        </section>

        <section className="bg-[#232d3b] p-6">
          <div className="flex items-center justify-center mb-4">
            <Image
              src="/coin-icon.png"
              alt="Coin Icon"
              width={48}
              height={48}
              className="w-12 h-12 mr-4"
            />
            <span className="text-white text-4xl font-bold">666,666</span>
          </div>

          <div className="flex justify-between items-center text-sm text-gray-400 mb-2">
            <span>Epic &gt;</span>
            <span>Level 1/10</span>
          </div>
          <div className="relative w-full h-2 bg-gray-700 rounded-full">
            <div
              className="absolute h-full bg-gradient-to-r from-green-400 via-purple-500 to-blue-500 rounded-full"
              style={{ width: "1%" }}
            ></div>
          </div>
        </section>

        {/* Footer Navigation */}
        <Footer />
      </main>
    </div>
  );
};

export default JackHomePage;
