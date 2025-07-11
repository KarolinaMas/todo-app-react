import React from "react";
import crossIcon from "../assets/images/icon-cross.svg";
import checkIcon from "../assets/images/icon-check.svg";

const ListItem = ({ isChecked, deleteItem, toggle, children }) => {
  return (
    <li
      className="
          group relative flex items-center justify-between bg-white w-full border-b border-[#E3E4F1] rounded-t-sm p-4 
          sm:px-6
          dark:bg-[#25273D] dark:text-[#C8CBE7] dark:border-[#393A4B]
        "
    >
      <label className="relative flex items-center w-full cursor-pointer">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => toggle()}
          className="
            peer appearance-none w-5 h-5 border border-[#E3E4F1] rounded-full 
            checked:bg-gradient-to-br checked:from-[#55DDFF] checked:to-[#C058F3] 
            checked:border-none focus:outline-none relative group-hover:border-[#C058F3]
            dark:border-[#393A4B]
          "
        />
        <img
          src={checkIcon}
          alt="check icon"
          className="
            absolute left-0 ml-[5px] h-[9px] pointer-events-none opacity-0 
            peer-checked:opacity-100
          "
        />
        <p
          className="
            pl-4 
            peer-checked:line-through peer-checked:text-[#D1D2DA] 
            sm:pl-5
            dark:peer-checked:text-[#4D5067]
          "
        >
          {children}
        </p>
      </label>

      <button
        className="w-3 h-3 shrink-0 cursor-pointer"
        onClick={() => deleteItem()}
      >
        <img src={crossIcon} alt="cross icon" />
      </button>
    </li>
  );
};

export default ListItem;
