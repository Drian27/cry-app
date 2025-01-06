"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Nav() {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  const isActive = (path: string) =>
    currentPath === path ? "text-teal-400" : "text-gray-300";

  return (
    <header className="bg-gray-800 w-full h-[60px] flex gap-0 p-6 justify-between items-center">
      <h1 className="text-lg font-bold text-teal-400">XRP Wallet</h1>
      <nav className="flex space-x-4">
        {/* Wallet Link */}
        <Link href="/">
          <p
            className={`font-normal ${isActive("/")} hover:text-teal-400`}
          >
            Wallet
          </p>
        </Link>

        {/* Rewards Link */}
        <Link href="/rewards">
          <p
            className={`font-normal ${isActive("/rewards")} hover:text-teal-400`}
          >
            Rewards
          </p>
        </Link>

        {/* Tasks Link */}
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


// "use client";

// import React, { useEffect, useState } from "react";
// import { usePathname } from "next/navigation";
// import Link from "next/link";

// export default function Nav() {
//   const pathname = usePathname();
//   const [currentPath, setCurrentPath] = useState("");

//   useEffect(() => {
//     setCurrentPath(pathname);
//   }, [pathname]);

//   return (
//     <header className="bg-gray-800 w-full h-[60px] flex gap-0 p-6 justify-between items-center">
//       <h1 className="text-lg font-bold text-teal-400">XRP Wallet</h1>
//       <nav className="flex space-x-4">
//         <Link href="/">
//           <p className={`font-normal ${currentPath === "/wallet" ? "text-teal-400" : "text-gray-300"} hover:text-teal-400`}>Wallet</p>
//         </Link>
//         <Link href="/rewards">
//           <p className={`font-normal ${currentPath === "/rewards" ? "text-teal-400" : "text-gray-300"} hover:text-teal-400`}>Rewards</p>
//         </Link>
//         <Link href="/tasks">
//           <p className={`font-normal ${currentPath === "/tasks" ? "text-teal-400" : "text-gray-300"} hover:text-teal-400`}>Tasks</p>
//         </Link>
//       </nav>
//     </header>
//   );
// }
