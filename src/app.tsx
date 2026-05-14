import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Treatments from "./pages/Treatments";
import Book from "./pages/Book";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/treatments" element={<Treatments />} />
      <Route path="/book" element={<Book />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
