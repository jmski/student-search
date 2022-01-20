import React from "react";

const Grades = ({ grade, index }) => {
  return (
    <li key={index}>
      Test {index + 1}: <span className="ml-7">{grade}%</span>
    </li>
  );
};

export default Grades;
