import React from "react";
import { FaLock } from "react-icons/fa";
import { FaGift } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";
import Link from "next/link";

const TasksPage = () => {
  return (
    <div>
      <div className="bg-gray-900 min-h-screen text-white flex flex-col">
        {/* Header */}
        <header className="bg-gray-800 p-4 flex justify-between items-center">
          <h1 className="text-lg font-bold text-teal-400">XRP Wallet is</h1>
          <nav className="flex space-x-4">
            <Link href="/">
              <p className="text-gray-300 hover:text-white">Wallet</p>
            </Link>
            <Link href="/rewards">
              <p className="text-gray-300 hover:text-white">Rewards</p>
            </Link>
            <Link href="/taks">
              <p className="text-gray-300 hover:text-white">Tasks</p>
            </Link>
          </nav>
        </header>

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
      </div>
    </div>
  );
};

export default TasksPage;
