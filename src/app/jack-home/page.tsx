"use client";

import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import Header from "@/app/components/Header";
import Footer from "../components/Footer";
import IconCardProviders from "../auth/social-providers/IconCardProviders";
import { FaEyeSlash } from "react-icons/fa6";

const JackHomePage = () => {
  const [showPrivateKey, setShowPrivateKey] = useState(false);
  const privateKey = "HBJHHJVJsd699732kbwd28y2";

  const handleCopy = () => {
    navigator.clipboard.writeText(privateKey);
    alert("Private key copied to clipboard!");
  };

  return (
    <div className="relative bg-[#28333F] h-screen flex flex-col sm:max-w-[430px] sm:mx-auto sm:shadow">
      <main className="w-full min-h-screen flex flex-col py-1 overflow-auto">
        {/* Header */}
        <Header />

        {/* Content */}
        <section className="bg-[#28333F] flex-1 flex flex-col gap-1 px-3 p-1">
          <div>
            {/* Private Key */}
            <div className="bg-[#32363C] w-full flex flex-col justify-center rounded-lg p-2 px-3 text-left gap-2 mb-3 mt-3">
              <div className="text-[#e8e4e0] text-sm lg:text-[14px] font-semibold">
                Private Key
              </div>
              <div className="flex justify-between items-center">
                <input
                  type={showPrivateKey ? "text" : "password"}
                  value={privateKey}
                  readOnly
                  className="bg-[#3A4048] text-white text-sm w-full px-2 py-1 rounded-md outline-none"
                />
                {/* <button
                  onClick={() => setShowPrivateKey(!showPrivateKey)}
                  className="ml-2 text-[#F79841] text-sm font-semibold"
                >
                  {showPrivateKey ? "Hide" : "Unhide"}
                </button> */}
                <div
                  className="ml-2 cursor-pointer text-[#F79841]"
                  onClick={() => setShowPrivateKey(!showPrivateKey)}
                >
                  {showPrivateKey ? <FaEyeSlash /> : <FaEye />}
                </div>

                <button
                  onClick={handleCopy}
                  className="ml-2 bg-[#F79841] text-white text-sm font-semibold px-3 py-1 rounded-md"
                >
                  Copy
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 mt-5 gap-2 mb-3">
            <div className="bg-[#32363C] w-full flex flex-col justify-center rounded-lg p-1 px-1 text-center h-[70px] gap-1">
              <p className="text-[#F79841] text-sm lg:text-[13px] font-semibold">
                ⁠Coin Balance
              </p>
              <div className="flex justify-center items-center gap-1 text-white">
                <IconCardProviders />
                <span className="text-white text-[14px] font-semibold">
                  +12
                </span>
              </div>
            </div>

            <div className="bg-[#32363C] w-full flex flex-col justify-center rounded-lg p-1 px-1 text-center h-[70px] gap-1">
              <p className="text-[#6F72E2] text-sm lg:text-[13px] font-semibold">
                XRP balance
              </p>
              <div className="flex justify-center items-center gap-1 text-white">
                <span className="text-white text-[14px] font-semibold">
                  10 M
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Navigation */}
        <Footer />
      </main>
    </div>
  );
};

export default JackHomePage;
