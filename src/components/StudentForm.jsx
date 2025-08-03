// src/components/StudentForm.jsx
import React, { useState } from "react";

const StudentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    class: "",
    address: "",
    phone: "",
    subjectNeed: "",
    timePreference: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    console.log(`Field changed: ${e.target.name}, New value: ${e.target.value}`); // Debugging log
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const students = JSON.parse(localStorage.getItem("students")) || [];
    students.push(formData);
    localStorage.setItem("students", JSON.stringify(students));
    alert("📝 রেজিস্ট্রেশন সফলভাবে সম্পন্ন হয়েছে!");
    setFormData({
      name: "",
      class: "",
      address: "",
      phone: "",
      subjectNeed: "",
      timePreference: "",
    });
  };

  return (
    <div className="bg-purple-50 shadow-lg rounded-xl p-6 max-w-xl mx-auto mt-6">
      <h2 className="text-2xl font-bold text-purple-700 mb-4 text-center">
      🎓 ছাত্র/ছাত্রী রেজিস্ট্রেশন ফর্ম
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="👤 নাম"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="class"
          placeholder="📚 কোন শ্রেণির শিক্ষার্থী?"
          value={formData.class}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="address"
          placeholder="📍 ঠিকানা"
          value={formData.address}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="📞 মোবাইল নাম্বার"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="subjectNeed"
          placeholder="🧠 কোন বিষয়ে শিক্ষক প্রয়োজন?"
          value={formData.subjectNeed}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="timePreference"
          placeholder="⏰ পড়ার সময় (যেমনঃ সন্ধ্যা ৬টা)"
          value={formData.timePreference}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          ✅ সাবমিট করুন
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
