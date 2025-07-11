import React from "react";
import clsx from "clsx";

const FilterBar = ({ filterOptions, handleFilterClick, isInSection }) => {
  return (
    <ul
      className={clsx(
        "flex gap-6 text-sm font-bold justify-center",
        !isInSection &&
          "bg-white rounded-sm p-4 mt-4 shadow-[0px_1px_20px_0px_rgba(148,149,165,0.35)]  dark:bg-[#25273D] dark:shadow-none"
      )}
    >
      {filterOptions.map(({ name, isOn }) => (
        <li
          key={crypto.randomUUID()}
          onClick={() => handleFilterClick(name)}
          className={clsx(
            isOn ? "text-[#3A7CFD]" : "text-[#9495A5] dark:text-[#5B5E7E]",
            "cursor-pointer hover:text-[#494C6B]"
          )}
        >
          {name}
        </li>
      ))}
    </ul>
  );
};

export default FilterBar;
