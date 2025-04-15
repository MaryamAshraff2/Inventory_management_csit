// // src/components/Topbar.jsx
// import React from "react";
// import { Bell, Search } from "lucide-react";

// const topbar = () => {
//   return (
//     <div className="flex items-center justify-between bg-white p-4 shadow-sm">
//       {/* Search Bar */}
//       <div className="flex items-center w-full max-w-md">
//         <Search className="text-gray-400 mr-2" />
//         <input
//           type="text"
//           placeholder="Search items, requests, users..."
//           className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring focus:border-blue-300"
//         />
//       </div>

//       {/* Right Section */}
//       <div className="flex items-center gap-4">
//         {/* Notification Icon */}
//         <div className="relative cursor-pointer">
//           <Bell className="text-gray-600" />
//           <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full px-1.5">
//             2
//           </span>
//         </div>

//         {/* Profile Image */}
//         <img
//           src="/logo.png" // Replace with your actual logo path
//           alt="Profile"
//           className="h-10 w-10 object-contain rounded-full border"
//         />
//       </div>
//     </div>
//   );
// };

// export default topbar;


// Topbar.jsx
import React from 'react';
import { FaBell } from 'react-icons/fa';

const topbar = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow sticky top-0 z-10">
      <input
        type="text"
        placeholder="Search items, requests, users..."
        className="border px-4 py-2 rounded-md w-1/3"
      />
      <div className="flex items-center gap-4">
        <button className="relative">
          <FaBell className="text-gray-600 text-xl" />
          <span className="absolute top-0 right-0 bg-blue-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">2</span>
        </button>
        <img
          src="/logo.png"
          alt="University Logo"
          className="h-10 w-10 rounded-full border"
        />
      </div>
    </header>
  );
};

export default topbar;