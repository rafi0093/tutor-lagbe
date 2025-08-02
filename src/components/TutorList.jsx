// src/components/TeacherList.jsx
import React, { useEffect, useState } from "react";

const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const storedTeachers = JSON.parse(localStorage.getItem("teachers")) || [];
    setTeachers(storedTeachers);
  }, []);

  return (
    <div className="px-6 py-10">
      <h1 className="text-3xl font-bold text-center text-purple-700 mb-8">
        👨‍🏫 শিক্ষক তালিকা
      </h1>

      {teachers.length === 0 ? (
        <p className="text-center text-gray-600">কোনো শিক্ষক এখনো রেজিস্টার করেননি।</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teachers.map((teacher, index) => (
            <div
              key={index}
              className="bg-purple-50 border border-purple-200 p-5 rounded-lg shadow-md"
            >
              <h2 className="text-xl font-bold text-purple-800 mb-2">👨‍🏫 {teacher.name}</h2>
              <p><span className="font-semibold">🎓 যোগ্যতা:</span> {teacher.qualification}</p>
              <p><span className="font-semibold">🧾 পেশা:</span> {teacher.occupation}</p>
              {teacher.occupation === "job" && (
                <p><span className="font-semibold">🏢 চাকরির প্রতিষ্ঠান:</span> {teacher.institution}</p>
              )}
              <p><span className="font-semibold">📚 অভিজ্ঞতা:</span> {teacher.experience}</p>
              <p><span className="font-semibold">📍 ঠিকানা:</span> {teacher.address}</p>
              <p>
                <span className="font-semibold">📞 মোবাইল:</span> {teacher.phone}
                <a
                  href={`tel:${teacher.phone}`}
                  className="ml-2 text-green-600 hover:text-green-800 font-medium"
                >
                  📞 কল করুন
                </a>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TeacherList;