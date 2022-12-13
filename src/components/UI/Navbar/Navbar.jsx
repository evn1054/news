import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

const setActiveStyle = ({ isActive }) =>
  isActive ? (classes.navbar__links, classes.active) : classes.navbar__links;
const Navbar = (props) => {
  return (
    <>
      <nav className={classes.navbar}>
        <div className={classes.navbar__container}>
          <NavLink to="/about" className={setActiveStyle}>
            О нас
          </NavLink>
          <NavLink to="/posts" className={setActiveStyle}>
            Санкт-Петербург
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
