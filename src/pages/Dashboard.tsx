import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Navigation from "../components/navigation/Navigation";
import Tasks from "../components/Tasks";

const DashboardPage: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="flex w-screen h-screen overflow-hidden">
        <Sidebar />
        <div className="w-[100%]">
          <Navigation />
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
