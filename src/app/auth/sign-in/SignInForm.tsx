"use client";

import React, { useEffect, useState } from "react";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

export default function SignInForm() {
  return (
    <div className="relative bg-gray-900 w-full h-screen text-white flex flex-col sm:max-w-[390px] sm:mx-auto sm:shadow">
      <main className="w-full min-h-screen flex flex-col py-1 overflow-auto">
        {/* Header */}
        <Header />

        <section className="flex-1 flex flex-col items-center justify-center px-6 p-1 gap-1">
          <div className="flex flex-col bg-gray-800 rounded-lg shadow-lg p-6 max-w-sm w-full">
            <h2 className="text-teal-400 text-xl font-semibold mb-2">Login with Telegram</h2>
            <p className="text-gray-300 mb-4">Sign in to manage your XRP wallet securely.</p>
            <div className="bg-white text-black p-3 rounded text-start">Invalid domain bot</div>
          </div>
        </section>

        {/* Footer Navigation */}
        <Footer />
      </main>
    </div>
  );
}
