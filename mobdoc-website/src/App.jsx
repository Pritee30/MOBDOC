import { Route, Routes } from "react-router-dom";
import "./App.css";
import Hero from "./components/home/Hero";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="min-h-screen flex-col bg-[#080D0C]">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/services" element={<Services />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
}

export default App;
