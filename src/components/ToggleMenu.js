import React from "react";

const ToggleMenu = ({ toggle, setToggle }) => {
  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <div className="right-0">
      <button
        onClick={toggleMenu}
        className="text-8xl font-bold text-gray-400 hover:text-black"
      >
        {toggle ? "-" : "+"}
      </button>
    </div>
  );
};

export default ToggleMenu;
