// App.js
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";

import Home from "./Pages/Home.jsx";
import Services from "./Pages/Services.jsx";
import About from "./Pages/AboutUs.jsx";
import Solutions from "./Pages/Solutions.jsx";
import SuccessStories from "./Pages/SuccessStories.jsx";
import TechnologyStack from "./Pages/TechnologyStack.jsx";
import Contact from "./Pages/Contact.jsx";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="/technology-stack" element={<TechnologyStack />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
