// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icon for hamburger and close

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-purple-600 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Tutor Lagbe</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:underline">🏠 হোম</Link>
          <Link to="/register" className="hover:underline">📝 রেজিস্ট্রেশন</Link>
          <Link to="/tutors" className="hover:underline">👨‍🏫 টিউটর তালিকা</Link>
          <Link to="/students" className="hover:underline">👩‍🎓 স্টুডেন্ট তালিকা</Link>
          <Link to="/search" className="hover:underline">🔍 সার্চ</Link> ✅ নতুন লিংক
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu List */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2 bg-purple-600">
          <Link to="/" className="block hover:underline" onClick={() => setIsOpen(false)}>
            🏠 হোম
          </Link>
          <Link to="/register" className="block hover:underline" onClick={() => setIsOpen(false)}>
            📝 রেজিস্ট্রেশন
          </Link>
          <Link to="/tutors" className="block hover:underline" onClick={() => setIsOpen(false)}>
            👨‍🏫 টিউটর তালিকা
          </Link>
          <Link to="/students" className="block hover:underline" onClick={() => setIsOpen(false)}>
            👩‍🎓 স্টুডেন্ট তালিকা
          </Link>
          <Link to="/search" className="block hover:underline" onClick={() => setIsOpen(false)}>
            🔍 সার্চ
          </Link> {/* ✅ Mobile menu তেও নতুন লিংক */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
