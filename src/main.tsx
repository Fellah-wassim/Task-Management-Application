import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Login from "./components/login/Login.tsx";
import Signup from "./components/signup/Signup.tsx";
import Dashboard from "./pages/Dashboard";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Dashboard />
  // <BrowserRouter>
  //   <Routes>
  //     <Route path="/" element={<Home />} />
  //     <Route path="/tasks" element={<Tasks />} />
  //     <Route path="/projects" element={<Projects />} />
  //     <Route path="/settings" element={<Settings />} />
  //   </Routes>
  // </BrowserRouter>
);
