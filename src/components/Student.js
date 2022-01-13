import React, { useState } from "react";

const Student = ({
  pic,
  firstName,
  lastName,
  email,
  company,
  skill,
  grades,
}) => {
  const [addTags, setAddTags] = useState([]);
  const [tag, setTag] = useState("");
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (tag.trim().length) {
      setTag("");
    } else {
      alert("tag is empty");
    }
    setAddTags((addTags) => [...addTags, tag]);
  };

  const removeTag = (index) => {
    setAddTags((addTags) => addTags.filter((tag, i) => i !== index));
  };

  return (
    <>
      <li className="flex justify-between px-8 pt-6 pb-8 border-b-2 border-gray-200">
        <div className="flex gap-12">
          <div>
            <img
              className="w-40 rounded-full border-2 border-gray-300"
              src={pic}
              alt={firstName}
            />
          </div>
          <div className="flex flex-col -mt-3">
            <h2 className="text-black text-5xl font-bold uppercase mb-4">
              {firstName} {lastName}
            </h2>
            <div className="flex flex-col ml-8 text-xl">
              <span>Email: {email}</span>
              <span>Company: {company}</span>
              <span>Skill: {skill}</span>
              <span>
                Average:{" "}
                {grades.reduce((a, b) => parseInt(a) + parseInt(b)) /
                  grades.length}
                {"%"}
              </span>
            </div>
            <ul
              className={`${
                toggle ? "block" : "hidden"
              } flex flex-col ml-8 text-lg mt-3`}
            >
              {grades.map((grade, index) => (
                <li key={index}>
                  Test {index + 1}: <span className="ml-7">{grade}%</span>
                </li>
              ))}
            </ul>

            <ul className="flex flex-wrap gap-4 ml-8 text-lg">
              {addTags.map((tag, i) => (
                <li
                  key={i}
                  onClick={() => removeTag(i)}
                  className="px-2 py-1 mt-3 rounded-md bg-gray-300"
                >
                  {tag}
                </li>
              ))}
            </ul>

            <form
              className={`${toggle ? "hidden" : "block"} ml-8 mt-3`}
              onSubmit={(e) => onSubmit(e)}
            >
              <input
                className="placeholder-black p-1 border-b-2 border-gray-400 outline-0"
                placeholder="Add Tag"
                type="text"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
              />
            </form>
          </div>
        </div>
        <div className="right-0">
          <button
            onClick={toggleMenu}
            className="text-8xl font-bold text-gray-400 hover:text-black"
          >
            {toggle ? "-" : "+"}
          </button>
        </div>
      </li>
    </>
  );
};

export default Student;
