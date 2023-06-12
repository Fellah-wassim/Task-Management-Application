import React, { useState } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";
import NotificationPopup from "./NotificationPopup";
import { BurgerButton } from "../BurgerButton";

interface NavigationProps {
  isOpen: boolean;
  onBurgerClick: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onBurgerClick, isOpen }) => {
  const [showNotification, setShowNotification] = useState(false);
  const toggleNotification = () => {
    setShowNotification(!showNotification);
  };

  return (
    <header className="w-[100%] h-[75px] flex items-center justify-between bg-gray-900 text-white py-4 px-6 max-sm:px-2 ">
      <div className="flex items-center">
        <h1 className="text-xl font-bold max-md:hidden">Task Management App</h1>
        <BurgerButton isOpen={isOpen} onBurgerClick={onBurgerClick} />{" "}
        <div className="ml-6">
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-800 text-white px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="flex items-center">
        <button className="text-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
          <NotificationsIcon onClick={toggleNotification} />
          {showNotification && <NotificationPopup />}
        </button>
        <button className="text-gray-300 hover:text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
          <LogoutIcon className="m-1" />
          <span className="max-md:hidden">Logout</span>
        </button>
      </div>
    </header>
  );
};

export default Navigation;
