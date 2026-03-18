import { Routes, Route } from "react-router-dom";

import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";

import HomePage from "./Layout/HomePage/HomePage";
import AboutVillage from "./Layout/Ourself/AboutVillage";
import Members from "./Layout/Ourself/Members";
import PhotoGallery from "./Layout/Ourself/photogallery";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutVillage />} />
        <Route path="/officers" element={<Members />} />
        <Route path="/gallery" element={<PhotoGallery />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;