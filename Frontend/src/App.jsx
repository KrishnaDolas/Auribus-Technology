// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
      {/* Header should be visible on all pages */}
      <Header />

      {/* All routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/SuccessStories" element={<SuccessStories />} />
        <Route path="/TechnologyStack" element={<TechnologyStack />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>

      {/* Footer visible on all pages */}
      <Footer />
    </Router>
  );
}

export default App;
