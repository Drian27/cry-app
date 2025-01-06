import React from "react";
import Footer from "../components/Footer";
import Header from "@/app/components/Header";


const RewardsPage = () => {
  return (
    <div>
      <div className="bg-gray-900 min-h-screen text-white flex flex-col">
        {/* Header */}
        <Header />

        {/* Content */}
        <main className="flex-grow flex items-center justify-center px-4">
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 max-w-sm w-full">
            <h2 className="text-teal-400 text-xl font-semibold mb-4">
              Rewards
            </h2>

            <p className="text-gray-300 mb-4">Your Total Points: 0</p>

            <div className="mb-4">
              <p className="text-gray-300 mb-2">Your Referral Code:</p>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value=""
                  readOnly
                  className="bg-gray-700 text-gray-300 rounded px-3 py-2 flex-grow focus:outline-none focus:ring focus:ring-teal-500"
                />
                <button className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 transition">
                  Copy Code
                </button>
              </div>
            </div>

            <button className="bg-teal-500 text-white py-2 px-4 w-full rounded hover:bg-teal-600 transition">
              Claim Airdrop
            </button>
          </div>
        </main>

        {/* Footer Navigation */}
        <Footer />
      </div>
    </div>
  );
};

export default RewardsPage;
