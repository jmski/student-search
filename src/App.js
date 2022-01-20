import React, { useState, useEffect } from "react";
import Student from "./components/Student";
import axios from "axios";
import SearchBar from "./components/SearchBar";

const StudentList = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [data, setData] = useState();
  const [mount, setMount] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [toggle, setToggle] = useState(false);
  const [nameSearch, setNameSearch] = useState("");
  const [tagSearch, setTagSearch] = useState("");

  useEffect(() => {
    if (!mount) {
      setMount(true);
      async function getData() {
        await axios(apiUrl)
          .then((response) => setData(response.data.students))
          .catch((error) => {
            console.error("Error fetching data", error);
            setError(error);
          })
          .finally(() => {
            setLoading(false);
          });
      }
      getData();
    }
  }, [apiUrl, mount]);

  if (loading) return "Loading...";
  if (error) return "Error!";

  const filterName = (nameSearch) => {
    return (student) => {
      return (
        student.firstName.toLowerCase().includes(nameSearch.toLowerCase()) ||
        student.lastName.toLowerCase().includes(nameSearch.toLowerCase())
      );
    };
  };

  // const filterTag = (tagSearch) => {};

  return (
    <div className="bg-stone-100 w-full h-screen flex justify-center items-center">
      <div className="bg-white rounded-xl shadow-lg w-3/6 h-5/6 overflow-y-scroll overflow-x-hidden scrollbar">
        <form>
          <SearchBar
            isNameBar={true}
            value={nameSearch}
            setValue={setNameSearch}
          />
          <SearchBar value={tagSearch} setValue={setTagSearch} />
        </form>
        <ul>
          {data.filter(filterName(nameSearch)).map((student) => (
            <Student
              key={student.id}
              pic={student.pic}
              firstName={student.firstName}
              lastName={student.lastName}
              email={student.email}
              company={student.company}
              skill={student.skill}
              grades={student.grades}
              toggle={toggle}
              setToggle={setToggle}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StudentList;
