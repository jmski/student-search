import React, { useState, useEffect } from "react";
import Student from "./components/Student";
import axios from "axios";

const StudentList = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [nameInput, setNameInput] = useState("");
  const [tagInput, setTagInput] = useState("");

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    await axios("https://api.hatchways.io/assessment/students")
      .then((response) => setData(response.data.students))
      .catch((error) => {
        console.error("Error fetching data", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  if (loading) return "Loading...";
  if (error) return "Error!";

  const searchByName = (targetValue) => {
    setNameInput(targetValue);
  };

  const searchByTag = (targetValue) => {
    setTagInput(targetValue);
  };

  const filterName = (nameInput) => {
    return (student) => {
      return (
        student.firstName.toLowerCase().includes(nameInput.toLowerCase()) ||
        student.lastName.toLowerCase().includes(nameInput.toLowerCase())
      );
    };
  };

  return (
    <div className="bg-stone-100 w-full h-screen flex justify-center items-center">
      <div className="bg-white rounded-xl shadow-lg w-3/6 h-5/6 overflow-y-scroll overflow-x-hidden scrollbar">
        <form>
          <input
            className="mx-4 w-full border-b-2 border-gray-200 outline-0 p-3"
            placeholder={"Search by name"}
            value={nameInput}
            onChange={(e) => searchByName(e.target.value)}
          ></input>
          <input
            className="mx-4 w-full border-b-2 border-gray-200 outline-0 p-3"
            placeholder={"Search by tag"}
            value={tagInput}
            onChange={(e) => searchByTag(e.target.value)}
          ></input>
        </form>
        <ul>
          {data.filter(filterName(nameInput)).map((student) => (
            <Student
              key={student.id}
              pic={student.pic}
              firstName={student.firstName}
              lastName={student.lastName}
              email={student.email}
              company={student.company}
              skill={student.skill}
              grades={student.grades}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StudentList;
