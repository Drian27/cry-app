import React from "react";
import Footer from "../components/Footer";
import Header from "@/app/components/Header";

const RewardsPage = () => {
  return (
    <div className="relative w-full h-screen flex flex-col sm:max-w-[430px] sm:mx-auto sm:shadow bg-white">
      <main className="w-full min-h-screen flex flex-col py-1 overflow-auto bg-[#191919]">
        {/* Header */}
        <Header />

        {/* Content */}
        <section className="flex-grow flex items-center justify-center px-4">
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 max-w-sm w-full">
            <h2 className="text-teal-400 text-xl font-semibold mb-4">Rewards</h2>

            <p className="text-gray-300 text-sm font-semibold mb-4">
              Your Total Points: <span className="text-teal-400 text-sm font-semibold">0</span>
            </p>

            <div className="mb-4">
              <p className="text-gray-300 text-sm font-medium mb-2">Your Referral Code:</p>
              <div className="flex justify-center items-center gap-0">
                <input type="text" className="bg-gray-700 w-full h-[45px] text-gray-300 rounded-l-lg px-3 flex-grow focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-0" />
                <button className="bg-teal-500 w-[150px] h-[45px] text-white rounded-r-lg flex justify-center items-center hover:bg-teal-600 transition">
                  <span className="text-white text-sm font-semibold">Copy Code</span>
                </button>
              </div>
            </div>

            <button className="bg-teal-500 text-white py-2 px-4 w-full rounded hover:bg-teal-600 transition">Claim Airdrop</button>
          </div>
        </section>

        {/* Footer Navigation */}
        <Footer />
      </main>
    </div>
  );
};

export default RewardsPage;
