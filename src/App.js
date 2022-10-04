import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Layout/Footer";
import { NavBar } from "./components/Layout/nav-bar";
import { Home } from "./components/Home/home";
import { Continent } from "./components/geo-locations/continent";
import { Country } from "./components/geo-locations/country";
import { CountryDetail } from "./components/geo-locations/country-detail";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/continents" element={<Continent />} />
        <Route path="/continents/:continent" element={<Country />} />
        <Route path="/about" element={<div>About</div>} />
        <Route path="/countries/:country" element={<CountryDetail />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
