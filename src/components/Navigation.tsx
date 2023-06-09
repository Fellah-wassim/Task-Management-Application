import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";

const Navigation: React.FC = () => {
  return (
    <header className="w-[100%] h-[75px] flex items-center justify-between bg-gray-900 text-white py-4 px-6">
      <div className="flex items-center">
        <h1 className="text-xl font-bold">Task Management App</h1>
        <div className="ml-6">
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-800 text-white px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="flex items-center">
        <button className="text-gray-300 hover:text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
          <NotificationsIcon />
        </button>
        <button className="text-gray-300 hover:text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
          <LogoutIcon className="m-1" />
          Logout
        </button>
      </div>
    </header>
  );
};

export default Navigation;
