import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import AdminDashboard from "./pages/AdminDashboard";
import Page1 from "./pages/Page1";
import Packing from "./pages/Packing";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/page1" element={<Page1 />} />
        {/* nested layers  */}
        <Route path="/services/packing" element={<Packing />} />

        
        
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
