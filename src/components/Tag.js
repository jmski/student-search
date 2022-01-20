import React from "react";

const Tag = ({ tag, index, setTags }) => {
  const removeTag = (index) => {
    setTags((tags) => tags.filter((tag, i) => i !== index));
  };

  return (
    <li
      key={index}
      value={tag}
      onClick={() => removeTag(index)}
      className="
    p-2 mt-3 rounded-md bg-gray-300"
    >
      {tag}
    </li>
  );
};

export default Tag;
