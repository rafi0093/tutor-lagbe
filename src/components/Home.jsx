// src/components/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-purple-50 to-white min-h-[90vh] flex flex-col items-center justify-center px-4 text-center py-12">
      {/* Welcome Notice */}
      <h1 className="text-3xl sm:text-4xl font-bold text-purple-700 mb-4 leading-snug">
        স্বাগতম "Tutor Lagba" অ্যাপে! 📚
      </h1>

      <p className="text-gray-700 text-base sm:text-lg max-w-2xl">
        এখানে আপনি সহজেই আপনার এলাকার গৃহশিক্ষক খুঁজে পেতে পারেন
        অথবা নিজে শিক্ষক হিসেবে রেজিস্ট্রেশন করতে পারেন।
      </p>

      {/* CTA Buttons */}
      <div className="mt-6 flex flex-col sm:flex-row gap-4">
        <Link
          to="/register"
          className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition"
        >
          📝 রেজিস্ট্রেশন করুন
        </Link>
        <Link
          to="/tutors"
          className="bg-gray-200 text-purple-700 px-6 py-2 rounded-md hover:bg-gray-300 transition"
        >
          👨‍🏫 টিউটর খুঁজুন
        </Link>
      </div>

      {/* Features Section */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl w-full px-4">
        <div className="bg-white p-4 rounded-lg shadow-md text-left">
          <h3 className="text-purple-700 font-semibold mb-2">🔍 দ্রুত টিউটর খুঁজুন</h3>
          <p className="text-sm text-gray-600">আপনার এলাকার সেরা শিক্ষক খুঁজে নিন মুহূর্তেই।</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md text-left">
          <h3 className="text-purple-700 font-semibold mb-2">📝 সহজ রেজিস্ট্রেশন</h3>
          <p className="text-sm text-gray-600">শিক্ষক বা ছাত্র হিসেবে কয়েক ধাপে রেজিস্ট্রেশন করুন।</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md text-left">
          <h3 className="text-purple-700 font-semibold mb-2">💰 একদম ফ্রি</h3>
          <p className="text-sm text-gray-600">কোনো খরচ নেই, ব্যবহার করুন সম্পূর্ণ বিনামূল্যে।</p>
        </div>
      </div>

      {/* Footer / Signature */}
      <div className="mt-10 text-sm text-gray-500">
        ✨ Developed by <span className="font-semibold text-purple-600">Tasnimul Hasan Rafi</span>
      </div>
    </div>
  );
};

export default Home;
