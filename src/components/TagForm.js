import React, { useState } from "react";

const TagForm = ({ tags, setTags, toggle }) => {
  const [tagInput, setTagInput] = useState("");

  const onSubmit = (e, index) => {
    e.preventDefault();
    if (tagInput.trim().length) {
      setTagInput("");
    } else {
      alert("tag is empty");
    }
    setTags([...tags, tagInput]);
  };

  return (
    <form className="py-2 ml-8 mt-3" onSubmit={(e) => onSubmit(e)}>
      <input
        className="placeholder-black p-1 border-b-2 border-gray-400 outline-0 text-lg"
        placeholder="Add Tag"
        type="text"
        value={tagInput}
        onChange={(e) => setTagInput(e.target.value)}
      />
    </form>
  );
};

export default TagForm;
