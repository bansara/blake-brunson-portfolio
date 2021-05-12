import React, { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";
import { Mail, Insta, ThemeToggle } from "./icons";
import "./nav.css";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const { pathname } = useLocation();
  const b1 = useRef(null);
  const b2 = useRef(null);
  const b3 = useRef(null);
  const content = useRef(null);

  const root = document.documentElement;

  const handleTheme = () => {
    // handles color theme toggle
    if (theme === "dark") {
      root.style.setProperty("--bg", "white");
      root.style.setProperty("--text", "#101011");
      root.style.setProperty("--accent", "#3c988f");
      root.style.setProperty("--secondary", "rgb(155, 155, 155)");
      setTheme("light");
    } else {
      root.style.setProperty("--bg", "#101011");
      root.style.setProperty("--text", "whitesmoke");
      root.style.setProperty("--accent", "#2d7972");
      root.style.setProperty("--secondary", "rgb(85, 85, 85)");
      setTheme("dark");
    }
  };
  const handleOpen = () => {
    // handles mobile nav animation
    if (!open) {
      content.current.classList.add("nav-open");
      b2.current.style.opacity = "0";
      b1.current.style.transform = "rotate(45deg) translate(9px, 5px)";
      b3.current.style.transform = "rotate(-45deg) translate(9px, -5px)";
      setOpen(true);
    } else {
      content.current.classList.remove("nav-open");
      b2.current.style.opacity = "1";
      b1.current.style.transform = "rotate(0deg) translate(0,0)";
      b3.current.style.transform = "rotate(0deg) translate(0,0)";
      setOpen(false);
    }
  };
  return (
    <nav>
      <div id="nav-header">
        <div id="burger" onClick={handleOpen}>
          <div id="b1" ref={b1}></div>
          <div id="b2" ref={b2}></div>
          <div id="b3" ref={b3}></div>
        </div>
        {pathname === "/" ? null : <h1 id="mobile-logo">BLAKE BRUNSON</h1>}
      </div>
      <div className="nav-content" ref={content}>
        <ul id="nav">
          <Link to="work" onClick={handleOpen}>
            <li>Work</li>
          </Link>
          <Link to="bio" onClick={handleOpen}>
            <li>Bio</li>
          </Link>
          {pathname === "/" ? null : (
            <Link to="/">
              <li id="logo">Blake Brunson</li>
            </Link>
          )}
          <Link to="press" onClick={handleOpen}>
            <li>Press</li>
          </Link>
          <li id="icons">
            <a
              href="https://www.instagram.com/blakebrunson/"
              target="_blank"
              rel="noreferrer"
            >
              <Tooltip title="Instagram">
                <Insta />
              </Tooltip>
            </a>
            <a
              href="mailto:brunson.blake@gmail.com?subject=Website%20Contact"
              target="_blank"
              rel="noreferrer"
            >
              <Tooltip title="Email Blake">
                <Mail />
              </Tooltip>
            </a>
            <span>
              <Tooltip title="Toggle Light / Dark theme">
                <ThemeToggle onClick={handleTheme} />
              </Tooltip>
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
