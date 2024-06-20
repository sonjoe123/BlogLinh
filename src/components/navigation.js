import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Anthology } from "./Anthology";
import { Journal } from "./Journal";
import { Search } from "./Search";
import logo from "../assets/img/umbrella.png";
import searchIcon from "../assets/img/icon.png";
import { JournalDetail } from "./JournalDetail";
export default function Navigation() {
  return (
    <BrowserRouter>
      <div>
        {/* Header section for the logo and Linh's Home */}
        <header className="text-center py-3 bg-white">
          <Link to="/Home">
            <img src={logo} alt="Linh's Logo" style={{ maxWidth: "100px" }} />
          </Link>
          <div>
            <a className="navbar-brand" href="/Home">
              Linh's Home
            </a>
          </div>
        </header>

        {/* Navbar */}
        <nav className="navbar navbar-expand-lg" data-bs-theme="light">
          <div className="container-fluid justify-content-between">
            {/* Center: Navigation Links */}
            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav">
                <a className="nav-link" href="/Home">
                  Home
                </a>
                <a className="nav-link" href="/Journal">
                  Journal
                </a>
                <a className="nav-link" href="/Anthology">
                  Anthology
                </a>
                <a className="nav-link" href="/About">
                  About
                </a>
                <a className="nav-link">
                  <Link to="/Search">
                    <img
                      src={searchIcon}
                      alt="search"
                      style={{ maxWidth: "30px" }}
                    />
                  </Link>
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Main content */}
        <div>
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Journal" element={<Journal />} />
            <Route
              path="/Journal/:imageName"
              element={<JournalDetail />}
            />{" "}
            {/* Dynamic route */}
            <Route path="/Anthology" element={<Anthology />} />
            <Route path="/About" element={<About />} />
            <Route path="/Search" element={<Search />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
