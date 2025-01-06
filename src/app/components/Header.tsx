"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import UnicornProviders from "../auth/social-providers/UnicornProviders";

export default function Nav() {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  const isActive = (path: string) =>
    currentPath === path ? "text-teal-400" : "text-gray-300";

  return (
    <header className="bg-gray-800 w-full h-[60px] flex justify-between items-center px-3">
      {/* Kiri: UnicornProviders dan XRP Wallet */}
      <div className="flex items-center gap-2">
        <div className="gradient-background-cs-unicorn w-[40px] h-[40px] flex items-center justify-center rounded-xl">
          <UnicornProviders />
        </div>
        <h1 className="text-teal-400 text-[16px] font-bold">XRP Wallet</h1>
      </div>

      {/* Kanan: Navigasi */}
      <nav className="flex space-x-6">
        <Link href="/">
          <p
            className={`font-normal ${isActive("/")} hover:text-teal-400`}
          >
            Wallet
          </p>
        </Link>
        <Link href="/rewards">
          <p
            className={`font-normal ${isActive("/rewards")} hover:text-teal-400`}
          >
            Rewards
          </p>
        </Link>
        <Link href="/tasks">
          <p
            className={`font-normal ${isActive("/tasks")} hover:text-teal-400`}
          >
            Tasks
          </p>
        </Link>
      </nav>
    </header>
  );
}
