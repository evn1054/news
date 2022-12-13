import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "../src/styles/Animation.css";
import "../src/styles/App.css";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/UI/Navbar/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <AppRouter />
    </>
  );
};

export default App;
