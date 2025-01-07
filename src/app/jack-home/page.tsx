"use client"

import React, { useState } from "react";
import Image from "next/image";
import Header from "@/app/components/Header";
import Footer from "../components/Footer";
import ExclamationProviders from "../auth/social-providers/ExclamationProviders";
import IconCardProviders from "../auth/social-providers/IconCardProviders";
import LightningProviders from "../auth/social-providers/LightningProviders";

const JackHomePage = () => {
  const [progress, setProgress] = useState(6); // Progress awal 6%
  const [level, setLevel] = useState(6); // Level awal

  // Fungsi untuk meningkatkan progress saat gambar diklik
  const handleImageClick = () => {
    if (progress < 100) {
      const newProgress = progress + 1; // Tambah 1% setiap klik
      setProgress(newProgress);

      // Perbarui level jika progress mencapai kelipatan 10
      if (newProgress >= level * 10 && level < 10) {
        setLevel(level + 1);
      }
    }
  };

  return (
    <div className="relative bg-[#28333F] h-screen flex flex-col sm:max-w-[430px] sm:mx-auto sm:shadow">
      <main className="w-full min-h-screen flex flex-col py-1 overflow-auto">
        {/* Header */}
        <Header />

        {/* Content */}
        <section className="bg-[#28333F] flex-1 flex flex-col gap-1 px-3 p-1">
          <div className="grid grid-cols-3 mt-5 gap-2 mb-3">
            <div className="bg-[#32363C] w-full flex flex-col justify-center rounded-lg p-1 px-1 text-center h-[70px] gap-1">
              <p className="text-[#F79841] text-sm lg:text-[13px] font-semibold">
                Earn per tap
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
                Coins to level up
              </p>
              <div className="flex justify-center items-center gap-1 text-white">
                <span className="text-white text-[14px] font-semibold">
                  10 M
                </span>
              </div>
            </div>

            <div className="bg-[#32363C] w-full flex flex-col justify-center rounded-lg p-1 px-1 text-center h-[70px] gap-1">
              <p className="text-[#84CB69] text-sm lg:text-[13px] font-semibold">
                Profit per hour
              </p>
              <div className="w-full flex justify-center items-center gap-1">
                <IconCardProviders />
                <span className="text-white text-[14px] font-semibold">
                  +636.31K
                </span>
                <ExclamationProviders />
              </div>
            </div>
          </div>

          {/* Coin Display */}
          <div className="w-full h-auto p-1">
            <div className="flex items-center justify-center gap-1 mb-0">
              <Image
                src="/coin-icon.png"
                alt="Coin Icon"
                width={50}
                height={50}
                className="mb-3"
              />
              <h3 className="text-white text-[40px] font-bold">666,666</h3>
            </div>

            {/* Progress Bar */}
            <div className="flex w-full h-auto justify-between items-center mb-0">
              <span className="text-white text-[10px] font-medium">
                Epic &gt;
              </span>
              <span className="text-white text-[10px] font-medium">
                <span className="text-gray-400 text-[10px] font-medium">
                  Level
                </span>{" "}
                {level}/10
              </span>
            </div>
            <div className="relative w-full h-[13px] bg-[#32363C] rounded-full">
              <div
                className="absolute h-full bg-gradient-to-r from-[#ADFAA1] via-[#C597CC] to-[#2F39A3] rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Interactive Character */}
          <div className="p-1 px-1">
            <Image
              src="/hero.png"
              alt="Hero"
              width={432}
              height={432}
              className="w-full h-auto cursor-pointer"
              onClick={handleImageClick} // tambahkan event handler click
            />
          </div>

          <div className="w-full h-auto flex items-center p-1 px-1 mb-2">
            <div className="w-full flex justify-between items-center">
              <div className="flex items-center gap-2">
                <LightningProviders />
                <p className="text-white text-sm font-semibold">
                  6500 / 6500
                </p>
              </div>
              <div className="flex items-center gap-3">
                <p className="text-white text-sm font-semibold">Boost</p>
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
