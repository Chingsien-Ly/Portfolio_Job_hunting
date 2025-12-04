import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Experiences from "./pages/Experiences";
import Design from "./pages/Design";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    // navbar
    <div className="w-screen h-screen">
      <div className="h-[100px] w-full flex items-center">
        <Navbar />
      </div>
      <main className="h-[calc(100%-100px)] w-full overflow-y-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/design" element={<Design />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
