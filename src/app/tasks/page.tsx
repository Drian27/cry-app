import React from "react";
import Footer from "../components/Footer";
import Header from "@/app/components/Header";

const TasksPage = () => {
  return (
    <div className="relative bg-gray-900 w-full h-screen flex flex-col sm:max-w-[430px] sm:mx-auto sm:shadow">
      <main className="w-full min-h-screen flex flex-col py-1 overflow-auto">
        {/* Header */}
        <Header />

        {/* Content */}
        <section className="bg-gray-900 flex-grow flex items-center justify-center px-4">
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 max-w-sm w-full">
            <h2 className="text-teal-400 text-xl font-semibold mb-4">Tasks</h2>
            <div className="bg-gray-700 w-full h-full flex justify-center items-center rounded gap-2 py-3 px-3 mb-4">
              <p className="text-gray-300 w-full text-[16px] font-normal mb-0">Share with 5 friends on Telegram</p>
              <button className="bg-teal-500 text-[15px] font-semibold text-[#191919] text-center w-[50%] h-[40px] py-2 px-2 rounded hover:bg-teal-600 transition">Get it done</button>
            </div>

            <div className="bg-gray-700 w-full h-full flex justify-center items-center rounded gap-2 py-3 px-3 mb-4">
              <p className="text-gray-300 w-full text-[16px] font-normal mb-0">Join the Official Telegram Group</p>
              <button className="bg-teal-500 text-[15px] font-semibold text-[#191919] text-center w-[50%] h-[40px] py-2 px-2 rounded hover:bg-teal-600 transition">Get it done</button>
            </div>

            <div className="bg-gray-700 w-full h-full flex justify-center items-center rounded gap-2 py-3 px-3 mb-4">
              <p className="text-gray-300 w-full text-[16px] font-normal mb-0">Invite Friends with Referral Code</p>
              <button className="bg-teal-500 text-[15px] font-semibold text-[#191919] text-center w-[50%] h-[40px] py-2 px-2 rounded hover:bg-teal-600 transition">Get it done</button>
            </div>
          </div>
        </section>

        {/* Footer Navigation */}
        <Footer />
      </main>
    </div>
  );
};

export default TasksPage;
