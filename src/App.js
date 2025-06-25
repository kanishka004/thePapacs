import { Routes, Route } from "react-router-dom";
import "./app.css"
import Mba from "./components/courses/Mba";
import Mca from "./components/courses/Mca";
import Bca from "./components/courses/Bca";
import Bba from "./components/courses/Bba";
import Ba from "./components/courses/Ba";
import MainPage from "./components/MainPage";
import Contact from "./components/contactUsPage/Contact";
import About from "./components/aboutUsPage/About";

export default function App() {
  
  return (
    <>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="mba" element={<Mba />} />
      <Route path="mca" element={<Mca />} />
      <Route path="bca" element={<Bca />} />
      <Route path="bba" element={<Bba />} />
      <Route path="ba" element={<Ba />} />
      <Route path="contactus" element={<Contact />} />
      <Route path="about" element={<About />} />
    </Routes>
    </>
    
  )
}