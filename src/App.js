import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainNavbar from "./pages/MainNavbar";
import Home from "./pages/Home";
import Brands from "./pages/Brands";
import Category from "./pages/Category";
import Shop from "./pages/Shop";
import News from "./pages/News";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Error from "./pages/Error";
import DownloadApps from './pages/DownloadApps';
function App() {
  return ( 
    <>
      <Router>
        <MainNavbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="brands" element={<Brands />} />
        <Route path="category" element={<Category />} />
        <Route path="shop" element={<Shop />} />
        <Route path="news" element={<News />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
        <Route path="apps" element={<DownloadApps />} />

        <Route path="*" element={<Error />} />
        </Routes>
        </Router>
    </>

  );
}

export default App;