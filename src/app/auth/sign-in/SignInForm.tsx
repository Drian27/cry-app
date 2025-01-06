"use client";

import { FaLock } from "react-icons/fa";
import { FaGift } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";
import React from "react";
import Link from "next/link";

export default function SignInForm() {
  return (
    // <div className="relative w-full h-screen flex flex-col sm:max-w-[390px] sm:mx-auto sm:shadow bg-white"></div>

    <div className="bg-gray-900 w-full h-screen text-white flex flex-col sm:max-w-[390px] sm:mx-auto sm:shadow">
      <main className="w-full min-h-screen flex flex-col py-1 overflow-auto">
        {/* Header */}
        <header className="bg-gray-800 w-full h-[60px] flex gap-0 p-6 justify-between items-center">
          <h1 className="text-lg font-bold text-teal-400">XRP Wallet</h1>
          <nav className="flex space-x-4">
            <Link href="/wallet">
              <p className="text-gray-300 hover:text-white">Wallet</p>
            </Link>
            <Link href="/rewards">
              <p className="text-gray-300 hover:text-white">Rewards</p>
            </Link>
            <Link href="/tasks">
              <p className="text-gray-300 hover:text-white">Tasks</p>
            </Link>
          </nav>
        </header>

        {/* Content */}
        <main className="flex-grow flex items-center justify-center px-4">
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 max-w-sm w-full">
            <h2 className="text-teal-400 text-xl font-semibold mb-2">
              Login dengan Telegram
            </h2>
            <p className="text-gray-300 mb-4">
              Masuk untuk mengelola dompet XRP Anda dengan aman.
            </p>
            <div className="bg-white text-black p-3 rounded text-start">
              Bot domain invalid
            </div>
          </div>
        </main>

        {/* Footer Navigation */}
        <footer className="bg-gray-800 p-4">
          <div className="flex justify-around text-sm">
            <Link href="/" passHref>
              <div className="flex flex-col items-center text-teal-400">
                <span className="material-icons">
                  <FaLock size={24} />
                </span>
                Wallet
              </div>
            </Link>
            <Link href="/rewards" passHref>
              <div className="flex flex-col items-center text-gray-300 hover:text-white">
                <span className="material-icons">
                  <FaGift size={24} />
                </span>
                Rewards
              </div>
            </Link>
            <Link href="/tasks" passHref>
              <div className="flex flex-col items-center text-gray-300 hover:text-white">
                <span className="material-icons">
                  <FaBook size={24} />
                </span>
                Tasks
              </div>
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
