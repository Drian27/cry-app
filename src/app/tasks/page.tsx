import React from "react";
import Footer from "../components/Footer";
import Header from "@/app/components/Header";

const TasksPage = () => {
  return (
    <div>
      <div className="bg-gray-900 min-h-screen text-white flex flex-col">
        {/* Header */}
        <Header />

        {/* Content */}
        <main className="flex-grow flex items-center justify-center px-4">
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 max-w-sm w-full">
            <h2 className="text-teal-400 text-xl font-semibold mb-4">Tasks</h2>
            <div className="mb-4">
              <p className="text-gray-300 mb-2">
                Share with 5 friends on Telegram
              </p>
              <button className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 transition">
                Get it done
              </button>
            </div>

            <div className="mb-4">
              <p className="text-gray-300 mb-2">
                Join the Official Telegram Group
              </p>
              <button className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 transition">
                Get it done
              </button>
            </div>

            <div className="mb-4">
              <p className="text-gray-300 mb-2">
                Invite Friends with Referral Code
              </p>
              <button className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 transition">
                Get it done
              </button>
            </div>
          </div>
        </main>

        {/* Footer Navigation */}
        <Footer />
      </div>
    </div>
  );
};

export default TasksPage;
