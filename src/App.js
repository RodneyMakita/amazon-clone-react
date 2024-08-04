import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Checkout from "./components/Checkout";
import SignInPage from "./components/Signin";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  
  // Check if the current path is "/signin"
  const isSignInPage = location.pathname === "/signin";

  return (
    <div className="App">
      {!isSignInPage && <Header />}
      
      <Routes>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignInPage />} />
      </Routes>
      
      {!isSignInPage && <Footer />}
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
