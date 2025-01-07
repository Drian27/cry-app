"use client";

import { FaLock, FaGift, FaBook } from "react-icons/fa";
import { LuPickaxe } from "react-icons/lu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Footer() {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  const isActive = (path: string) =>
    currentPath === path ? "text-teal-400" : "text-gray-300";

  return (
    <footer className="flex flex-col bg-gray-800 p-4">
      <div className="flex justify-around text-sm">
        {/* Wallet Link */}
        <Link href="/" passHref>
          <div className={`flex flex-col items-center ${isActive("/")}`}>
            <FaLock size={24} />
            <span className="text-sm font-normal">Wallet</span>
          </div>
        </Link>

        {/* Tap-Tap Link */}
        <Link href="/tap-tap" passHref>
          <div className={`flex flex-col items-center ${isActive("/tap-tap")}`}>
            <LuPickaxe size={24} />
            <span className="text-sm font-normal">Mine</span>
          </div>
        </Link>

        {/* Rewards Link */}
        <Link href="/rewards" passHref>
          <div className={`flex flex-col items-center ${isActive("/rewards")}`}>
            <FaGift size={24} />
            <span className="text-sm font-normal">Rewards</span>
          </div>
        </Link>

        {/* Tasks Link */}
        <Link href="/tasks" passHref>
          <div className={`flex flex-col items-center ${isActive("/tasks")}`}>
            <FaBook size={24} />
            <span className="text-sm font-normal">Tasks</span>
          </div>
        </Link>
      </div>
    </footer>
  );
}
