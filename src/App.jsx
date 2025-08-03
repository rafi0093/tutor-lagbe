import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import RegisterPage from "./components/RegisterPage";
import TutorList from "./components/TutorList";
import StudentList from "./components/StudentList";
import Footer from "./components/Footer";

// 🔍 নতুন Import
import Search from "./pages/Search"; 

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Routes */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/tutors" element={<TutorList />} />
            <Route path="/students" element={<StudentList />} />
            <Route path="/search" element={<Search />} /> {/* 🔍 Search Route */}
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
