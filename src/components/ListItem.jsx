import React from "react";
import crossIcon from "../assets/images/icon-cross.svg";
import checkIcon from "../assets/images/icon-check.svg";

const ListItem = ({ isCompleted, deleteItem, toggle, children }) => {
  return (
    <li className="bg-white relative w-full border-b border-[#E3E4F1] rounded-t-sm flex items-center justify-between p-4">
      <label className="flex items-center w-full cursor-pointer relative">
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={() => toggle()}
          className="peer appearance-none w-5 h-5 border border-[#E3E4F1] rounded-full 
                     checked:bg-gradient-to-br checked:from-[#55DDFF] checked:to-[#C058F3] 
                     checked:border-none focus:outline-none relative"
        />
        <img
          src={checkIcon}
          alt="check icon"
          className="absolute left-0 ml-[5px] h-[9px] pointer-events-none opacity-0 peer-checked:opacity-100"
        />
        <p className="pl-4 peer-checked:line-through peer-checked:text-[#D1D2DA]">
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
