import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import axios from 'axios';
import Header from "./components/Header";
import Home from "./pages/Home";
import ToolPage from "./components/ToolPage";
import SubmitAdvertise from "./components/submit_advertise";
import Ranking from "./components/Ranking";
import SocialListen from "./components/SocialListening";
import AllModels from "./components/AllModels";
import Domyself from "./components/features/Domyself";
// import PaymentForm from './components/PaymentForm';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    try {
      const response = await axios.get('/api/auth/check-login', {
        withCredentials: true
      });
      
      setIsLoggedIn(response.data.isLoggedIn);
    } catch (error) {
      console.error('Error checking login status:', error);
      setIsLoggedIn(false);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} />
      <div className="pt-20"> {/* Add padding-top to account for fixed header */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tool/:id" element={<ToolPage />} />
          <Route path="/submit_advertise" element={<SubmitAdvertise />} />
          {/* <Route path="/payment" element={<PaymentForm />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/Ranking" element={<Ranking/>}/> 
          <Route path="/SocialListening" element={<SocialListen/>}/>
          <Route path="/All_models" element={<AllModels/>}/>
          <Route path="/Domyself" element={<Domyself/>}/>
          <Route 
            path="/dashboard" 
            element={isLoggedIn ? <Dashboard /> : <Navigate to="/login?redirect=dashboard" />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;