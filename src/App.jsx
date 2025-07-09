// src/App.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import AppNav from "./components/AppNav";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import "./App.css";

export default function App() {
  return (
    <>
    <AppNav />
      <Outlet />
      <BackToTop />
    </>
  );
}
