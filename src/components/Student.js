import React, { useState } from "react";
import Grades from "./Grades";
import Tag from "./Tag";
import TagForm from "./TagForm";
import ToggleMenu from "./ToggleMenu";

const Student = ({
  pic,
  firstName,
  lastName,
  email,
  company,
  skill,
  grades,
  toggle,
  setToggle,
}) => {
  const [tags, setTags] = useState([]);

  return (
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
            {grades.map((grade, i) => (
              <Grades key={i} index={i} grade={grade} />
            ))}
          </ul>

          <ul className="flex flex-wrap gap-2 ml-8 text-lg">
            {tags.map((tag, i) => (
              <Tag key={i} index={i} tag={tag} setTags={setTags} />
            ))}
          </ul>
          <TagForm tags={tags} setTags={setTags} toggle={toggle} />
        </div>
      </div>
      <ToggleMenu toggle={toggle} setToggle={setToggle} />
    </li>
  );
};

export default Student;
