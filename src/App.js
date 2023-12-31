import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/HOME/Home";
import About from "./component/ABOUT/About";
import Help from "./component/HELP/Help";
import "./index.css";
import ScrollToTop from "./component/Scrolltotop";
import Contact from "./component/CONTACT/Contact";
import Login from "./component/LOGIN/Login";
import SignIn from "./component/SIGNIN/SignIn";
export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignIn/>}/>
      </Routes>
    </Router>
  );
}
