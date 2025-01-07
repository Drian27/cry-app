"use client";

import React, { useState } from "react";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "@/app/components/Header";
import LightningProviders from "../auth/social-providers/LightningProviders";

const TaptapPage = () => {
  const [progress, setProgress] = useState(6); // Progress awal 6%

  // Fungsi untuk meningkatkan progress saat gambar diklik
  const handleImageClick = () => {
    if (progress < 100) {
      const newProgress = Math.min(progress + 10, 100); // Tambah 10% setiap klik, maksimal 100%
      setProgress(newProgress);
    }
  };

  // Hitung level berdasarkan progress
  const level = Math.min(Math.ceil(progress / 10), 10); // Maksimal level 10

  return (
    <div className="relative bg-gray-900 h-screen flex flex-col sm:max-w-[430px] sm:mx-auto sm:shadow">
      <main className="w-full min-h-screen flex flex-col py-1 overflow-auto">
        {/* Header */}
        <Header />

        {/* Content */}
        <section className="bg-gray-900 flex-1 flex flex-col gap-1 px-3 p-1">
          <div className="w-full h-auto mt-3 p-2">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Image
                src="/coin-icon.png"
                alt="Coin Icon"
                width={50}
                height={50}
                className="mb-3"
              />
              <h3 className="text-white text-[40px] font-bold">666,666</h3>
            </div>

            <div className="flex w-full h-auto justify-between items-center mb-2">
              <span className="text-white text-[10px] font-medium">Epic &gt;</span>
              <span className="text-white text-[10px] font-medium">
                <span className="text-gray-400 text-[10px] font-medium">Level</span> {level}/10
              </span>
            </div>

            <div className="relative w-full h-[13px] bg-[#32363C] rounded-full">
              <div
                className="absolute h-full bg-gradient-to-r from-[#ADFAA1] via-[#C597CC] to-[#2F39A3] rounded-full"
                style={{ width: `${level * 10}%` }} // Progress bar mengikuti level
              ></div>
            </div>
          </div>

          <div className="p-1 px-1 mb-6">
            <Image
              src="/hero.png"
              alt="Hero"
              width={432}
              height={432}
              className="w-full h-auto cursor-pointer"
              onClick={handleImageClick}
            />
          </div>

          <div className="w-full h-auto flex items-center">
            <div className="w-full flex justify-between items-center p-2">
              <div className="flex items-center gap-2">
                <LightningProviders />
                <p className="text-white text-sm font-semibold">6500 / 6500</p>
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

export default TaptapPage;
