// src/components/TeacherForm.jsx
import React, { useState } from "react";

const TeacherForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    qualification: "",
    isJobHolder: "",
    jobInstitution: "",
    experience: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save to localStorage
    const existingData = JSON.parse(localStorage.getItem("teachers")) || [];
    localStorage.setItem("teachers", JSON.stringify([...existingData, formData]));

    // Clear form
    setFormData({
      name: "",
      address: "",
      phone: "",
      qualification: "",
      isJobHolder: "",
      jobInstitution: "",
      experience: "",
    });

    alert("✅ শিক্ষক রেজিস্ট্রেশন সফল হয়েছে!");
  };

  return (
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
        placeholder="📞 ফোন নাম্বার"
        value={formData.phone}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />

      <input
        type="text"
        name="qualification"
        placeholder="🎓 শিক্ষাগত যোগ্যতা"
        value={formData.qualification}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />

      <select
        name="isJobHolder"
        value={formData.isJobHolder}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      >
        <option value="">📌 আপনি কি চাকরিজীবী?</option>
        <option value="Student">🧑‍🎓 না, আমি ছাত্র</option>
        <option value="Job Holder">💼 হ্যাঁ, আমি চাকরি করি</option>
      </select>

      {formData.isJobHolder === "Job Holder" && (
        <input
          type="text"
          name="jobInstitution"
          placeholder="🏢 কোথায় চাকরি করেন?"
          value={formData.jobInstitution}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      )}

      <input
        type="text"
        name="experience"
        placeholder="📘 আগে পড়ানোর অভিজ্ঞতা (যদি থাকে)"
        value={formData.experience}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />

      <button
        type="submit"
        className="w-full bg-purple-700 text-white py-2 rounded hover:bg-purple-800"
      >
        ✅ সাবমিট করুন
      </button>
    </form>
  );
};

export default TeacherForm;