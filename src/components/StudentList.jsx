// src/components/StudentList.jsx
import React, { useEffect, useState } from "react";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const savedStudents = JSON.parse(localStorage.getItem("students")) || [];
    setStudents(savedStudents);
  }, []);

  return (
    <div className="px-6 py-10">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-8">
        🎓 ছাত্র-ছাত্রী তালিকা
      </h1>

      {students.length === 0 ? (
        <p className="text-center text-gray-600">কোনো ছাত্র এখনো রেজিস্টার করেনি।</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {students.map((student, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 border border-green-100"
            >
              <h2 className="text-xl font-semibold text-green-700 mb-2">
                {student.name}
              </h2>
              <p><span className="font-semibold">📚 শ্রেণি:</span> {student.class}</p>
              <p><span className="font-semibold">📍 ঠিকানা:</span> {student.address}</p>
              <p className="flex items-center gap-2">
                <span className="font-semibold">📞 মোবাইল:</span> {student.phone}
                <a
                  href={`tel:${student.phone}`}
                  className="text-green-600 hover:text-green-800 underline"
                >
                  📞 কল করুন
                </a>
              </p>
              <p><span className="font-semibold">🧠 প্রয়োজনীয় বিষয়:</span> {student.subjectNeed || "উল্লেখ করা হয়নি"}</p>
              <p><span className="font-semibold">⏰ পছন্দের সময়:</span> {student.timePreference || "উল্লেখ করা হয়নি"}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StudentList;