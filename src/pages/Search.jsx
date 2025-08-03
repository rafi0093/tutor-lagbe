import { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const Search = () => {
  const [area, setArea] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const studentSnapshot = await getDocs(collection(db, "students"));
    const teacherSnapshot = await getDocs(collection(db, "teachers"));

    const matchedStudents = studentSnapshot.docs
      .map(doc => ({ ...doc.data(), type: "Student" }))
      .filter(doc => doc.address?.toLowerCase().includes(area.toLowerCase()));

    const matchedTeachers = teacherSnapshot.docs
      .map(doc => ({ ...doc.data(), type: "Teacher" }))
      .filter(doc => doc.address?.toLowerCase().includes(area.toLowerCase()));

    setResults([...matchedStudents, ...matchedTeachers]);
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🔍 Tutor/Student খুঁজুন (এলাকার নামে)</h1>

      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          placeholder="উদাহরণ: Dhanmondi"
          className="flex-1 border border-gray-300 p-2 rounded"
        />
        <button
          onClick={handleSearch}
          className="bg-purple-600 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </div>

      {results.length > 0 ? (
        <div className="space-y-4">
          {results.map((person, index) => (
            <div key={index} className="border p-3 rounded shadow">
              <p><strong>👤 {person.name}</strong> ({person.type})</p>
              <p>📞 {person.phone}</p>
              <p>📍 {person.address}</p>
              <p>🎓 {person.qualification}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">কোনো ফলাফল পাওয়া যায়নি</p>
      )}
    </div>
  );
};

export default Search;
