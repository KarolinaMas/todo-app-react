import React from "react";

const FilterBar = ({ filterOptions, handleFilterClick, isInSection }) => {
  return (
    <ul
      className={`${
        !isInSection &&
        "bg-white rounded-sm p-4 mt-4 shadow-[0px_1px_20px_0px_rgba(148,149,165,0.35)]"
      } flex gap-6 text-sm font-bold justify-center`}
    >
      {filterOptions.map(({ name, isOn }) => (
        <li
          key={name}
          onClick={() => handleFilterClick(name)}
          className={`${
            isOn ? "text-[#3A7CFD]" : "text-[#9495A5]"
          } cursor-pointer hover:text-[#494C6B]`}
        >
          {name}
        </li>
      ))}
    </ul>
  );
};

export default FilterBar;
