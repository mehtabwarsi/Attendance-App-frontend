import React from "react";
import { Routes, Route } from "react-router-dom";
import AttendencePage from "../AttendencePage/AttendencePage";
import Login from "../AuthScreen/LoginScreen/login";
import Register from "../AuthScreen/RegisterScreen/Register";
import Navbar from "../Navbar/navbar";
import Admin from "../AdminView/Admin";

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/attendence" element={<AttendencePage />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
};

export default AppRouter;
