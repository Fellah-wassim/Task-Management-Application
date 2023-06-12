import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useWindowSize } from "../hooks/useWindowSize";

import Sidebar from "../components/Sidebar";
import Navigation from "../components/navigation/Navigation";
import Tasks from "../components/tasks/Tasks";

const DashboardPage: React.FC = () => {
  const [windowSize, setWindowSize] = useState(useWindowSize());

  const [isOpen, setIsOpen] = useState(windowSize.width < 768 ? false : true);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      if (windowSize.width > 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowSize]);

  const handleToggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <BrowserRouter>
      <div className="flex w-screen h-screen overflow-hidden">
        <Sidebar isOpen={isOpen} />
        <div className="w-[100%]">
          <Navigation isOpen={isOpen} onBurgerClick={handleToggleSidebar} />
          <div className="p-2 h-screen pb-[75px] overflow-scroll">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default DashboardPage;

function Home() {
  return <h1>Home</h1>;
}

function Projects() {
  return <h1>Projects</h1>;
}

function Settings() {
  return <h1>Settings</h1>;
}
