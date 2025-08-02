// src/components/RegisterPage.jsx
import React from "react";
import TeacherForm from "./TeacherForm";
import StudentForm from "./StudentForm";

const RegisterPage = () => {
  return (
    <div className="px-6 py-10">
      <h1 className="text-3xl font-bold text-center text-purple-700 mb-10">
        রেজিস্ট্রেশন করুন
      </h1>

      <div className="flex flex-col md:flex-row justify-center gap-10">
        {/* Teacher Registration */}
        <div className="w-full md:w-1/2 bg-purple-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-purple-700">👨‍🏫 শিক্ষক রেজিস্ট্রেশন</h2>
          <TeacherForm />
        </div>

        {/* Student Registration */}
        <div className="w-full md:w-1/2 bg-green-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-green-700">🎓 ছাত্র/ছাত্রী রেজিস্ট্রেশন</h2>
          <StudentForm />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
