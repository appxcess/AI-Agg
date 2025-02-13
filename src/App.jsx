// File: src/App.jsx

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Header from "./components/Header";
import Home from "./pages/Home";
import ToolPage from "./components/ToolPage";
import SubmitAdvertise from "./components/submit_advertise"; // Make sure the path matches exactly

function App() {
  return (
    <Router>
      <Header />
      <div className="pt-20"> {/* Add padding-top to account for fixed header */}
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/tool/:id" element={<ToolPage />} />
          <Route path="/submit_advertise" element={<SubmitAdvertise />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;