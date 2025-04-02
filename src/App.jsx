import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import AdminDashboard from "./pages/AdminDashboard";
// import Page1 from "./pages/Page1";
import Terms from "./pages/Terms";
import Faq from "./pages/Faq";
import Privacy from "./pages/Privacy";
import Blog from "./pages/Blog";

import HouseholdShifting from "./ServicePages/HouseholdShifting ";
import Insurance from "./ServicePages/Insurance";
import LoadingAndUnloading from "./ServicePages/LoadingAndUnloading";
import OfficeShifting from "./ServicePages/OfficeShifting";
import PreMoving from "./ServicePages/PreMoving";
import Quotation from "./ServicePages/Quotation";
import SafeStorage from "./ServicePages/SafeStorage";
import SmartMoveBudget from "./ServicePages/SmartMoveBudget";
import PackingAndMoving from "./ServicePages/PackingAndMoving";
import CarShifting from "./ServicePages/CarShifting";
import BikeShifting from "./ServicePages/BikeShifting";
import About from "./pages/About";
import GetQuotationModal from "./pages/GetQuotationModal";
import UniqueFeatures from "./pages/UniqueFeatures";
import WelcomeSection from "./pages/WelcomeSection";
import OurProcess from "./pages/OurProcess";
import OperationalCities from "./pages/OperationalCities";
import FeaturedAssociations from "./pages/FeaturedAssociations";

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
        <Route path="/terms" element={<Terms/>} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/privacy" element={<Privacy/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/quote" element={<GetQuotationModal/>} />

        <Route path="/unique" element={<UniqueFeatures/>} />
        <Route path="/welcome" element={<WelcomeSection/>} />
        <Route path="/ourprocess" element={<OurProcess/>} />
        <Route path="/operation" element={<OperationalCities/>} />
        <Route path="/featured" element={<FeaturedAssociations/>} />

        
        
        
        {/* nested Services layers  */}
        <Route path="/services/packingandmoving" element={<PackingAndMoving />} />
        <Route path="/services/carshifting" element={<CarShifting/>} />
        <Route path="/services/bikeshifting" element={<BikeShifting/>} />
        <Route path="/services/householdshifting" element={<HouseholdShifting/>} />
        <Route path="/services/insurance" element={<Insurance />} />
        <Route path="/services/loadingandunloading" element={<LoadingAndUnloading />} />
        <Route path="/services/officeshifting" element={<OfficeShifting />} />
        <Route path="/services/premoving" element={<PreMoving/>} />
        <Route path="/services/quotation" element={<Quotation />} />
        <Route path="/services/safestorage" element={<SafeStorage />} />
        <Route path="/services/smartmovebudget" element={<SmartMoveBudget />} />
     
        
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
