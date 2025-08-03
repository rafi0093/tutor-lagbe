// src/pages/Search.jsx
import React, { useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase"; // ✅ তোমার firebase config ঠিকমতো import করো

const Search = () => {
  const [area, setArea] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    const matchedData = [];

    try {
      // 🔍 টিউটর কালেকশন থেকে এলাকা অনুযায়ী খোঁজ
      const tutorRef = collection(db, "tutors");
      const tutorQuery = query(tutorRef, where("address", "==", area));
      const tutorSnap = await getDocs(tutorQuery);
      tutorSnap.forEach(doc => {
        matchedData.push({ ...doc.data(), type: "tutor" });
      });

      // 🔍 স্টুডেন্ট কালেকশন থেকেও খোঁজ
      const studentRef = collection(db, "students");
      const studentQuery = query(studentRef, where("address", "==", area));
      const studentSnap = await getDocs(studentQuery);
      studentSnap.forEach(doc => {
        matchedData.push({ ...doc.data(), type: "student" });
      });

      setResults(matchedData);
    } catch (error) {
      console.error("সার্চে সমস্যা:", error);
    }

    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4 text-center">🔍 এলাকা দিয়ে সার্চ করুন</h2>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="এলাকার নাম লিখুন (যেমন: Dhanmondi)"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          className="flex-grow p-2 rounded border border-gray-300"
        />
        <button
          onClick={handleSearch}
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          সার্চ
        </button>
      </div>

      {loading && <p>🔄 লোড হচ্ছে...</p>}

      {!loading && results.length === 0 && (
        <p className="text-gray-500">কোন তথ্য পাওয়া যায়নি।</p>
      )}

      <div className="grid gap-4">
        {results.map((item, idx) => (
          <div key={idx} className="p-4 rounded shadow bg-white">
            <h3 className="text-lg font-bold">{item.name}</h3>
            <p>📍 ঠিকানা: {item.address}</p>
            <p>📱 ফোন: {item.phone}</p>
            <p>
              👤 ধরন:{" "}
              <span className="font-medium text-purple-700">
                {item.type === "tutor" ? "টিউটর" : "স্টুডেন্ট"}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
