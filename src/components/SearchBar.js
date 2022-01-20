import React from "react";

const SearchBar = ({ value, setValue, isNameBar }) => {
  const searchByName = (targetValue) => {
    setValue(targetValue);
  };

  const searchByTag = (targetValue) => {
    setValue(targetValue);
  };

  return (
    <input
      className="mx-4 w-full border-b-2 border-gray-200 outline-0 p-3"
      placeholder={`${isNameBar ? "Search by name" : "Search by tag"}`}
      value={value}
      onChange={(e) =>
        `${
          isNameBar ? searchByName(e.target.value) : searchByTag(e.target.value)
        }`
      }
    />
  );
};

export default SearchBar;
