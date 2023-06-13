import React, { useState } from "react";
import { Link } from "react-router-dom";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import SettingsIcon from "@mui/icons-material/Settings";
import HomeWorkIcon from "@mui/icons-material/HomeWork";

const sidebarData: SidebarData[] = [
  {
    title: "Home",
    icon: <HomeWorkIcon />,
    link: "/",
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

interface SidebarData {
  title: string;
  icon: JSX.Element;
  link: string;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const [valueLink, setValueLink] = useState(window.location.pathname);

  const faviconElement = document.getElementById("favicon");

  const title =
    window.location.pathname.replace("/", "").charAt(0).toUpperCase() +
    window.location.pathname.replace("/", "").slice(1);
  document.title = `${title ? title : "Home"} | Task Management App`;
  faviconElement?.setAttribute(
    "href",
    `public/${title ? title.toLowerCase() : "home"}.png`
  );

  const handleLinkClick = (val: SidebarData) => {
    setValueLink(val.link);
    const title = val.title;
    document.title = `${title} | Task Management App`;

    faviconElement?.setAttribute(
      "href",
      `public/${val.title.toLowerCase()}.png`
    );
  };

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
                <Link to={val.link} onClick={() => handleLinkClick(val)}>
                  <li
                    className={`p-2 cursor-pointer hover:bg-gray-300 ${
                      valueLink === val.link ? "bg-gray-300" : ""
                    }`}
                    key={key}
                  >
                    <div className="flex items-center space-x-4">
                      <div>{val.icon}</div>
                      <div>{val.title}</div>
                    </div>
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
