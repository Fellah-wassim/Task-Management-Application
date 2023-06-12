import React from "react";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import SettingsIcon from "@mui/icons-material/Settings";
import HomeWorkIcon from "@mui/icons-material/HomeWork";

const sidebarData = [
  {
    title: "Home",
    icon: <HomeWorkIcon />,
    link: "/dashboard",
  },
  {
    title: "Tasks",
    icon: <TaskAltIcon />,
    link: "/tasks",
  },
  {
    title: "Projects",
    icon: <AccountTreeIcon />,
    link: "/projects",
  },
  {
    title: "Settings",
    icon: <SettingsIcon />,
    link: "/settings",
  },
];

const user = {
  id: "1",
  name: "John Doe",
  role: "Admin",
};

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <div>
      {isOpen && (
        <div
          className={`w-[250px] h-[100vh] bg-gray-200 text-gray-800 p-4 max-md:fixed top-0 left-0 ${
            isOpen ? "max-md:pt-[80px]" : "-left-full"
          } md:left-0 transition-all duration-300 ease-in-out`}
        >
          <div key={user.id} className="flex items-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-gray-400 rounded-full overflow-hidden">
              <img src="/john-doe.jpg" alt="user pic" />
            </div>
            <div className="flex flex-col">
              <div className="font-semibold">{user.name}</div>
              <div className="text-sm text-gray-600">{user.role}</div>
            </div>
          </div>
          <div className="border border-gray-400 mb-4"></div>

          <ul>
            {sidebarData.map((val, key) => {
              return (
                <li
                  className={`p-2 cursor-pointer hover:bg-gray-300 ${
                    window.location.pathname === val.link ? "bg-gray-300" : ""
                  }`}
                  key={key}
                  onClick={() => {
                    window.location.pathname = val.link;
                  }}
                >
                  <div className="flex items-center space-x-4">
                    <div>{val.icon}</div>
                    <div>{val.title}</div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
