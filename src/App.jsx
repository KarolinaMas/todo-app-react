import React from "react";
import moonIcon from "./assets/images/icon-moon.svg";
import bgImage from "./assets/images/bg-image.jpg";
import crossIcon from "./assets/images/icon-cross.svg";
import checkIcon from "./assets/images/icon-check.svg";

const App = () => {
  return (
    <div className="min-h-[100vh] bg-[#FAFAFA]">
      <img
        src={bgImage}
        alt="img"
        aria-hidden
        className="h-[200px] sm:h-auto max-h-[35vh] object-cover w-full"
      />
      <div
        className="absolute inset-0 w-full h-[200px] sm:h-auto max-h-[35vh] bg-gradient-to-tl from-[#5596FF] to-[#AC2DEB] opacity-70 pointer-events-none"
        aria-hidden="true"
      />
      <div className="w-full flex flex-col items-center px-6 -mt-40 mb-5">
        <header className="flex justify-between items-center w-full max-w-xl mb-6 text-white z-10">
          <h1 className="text-2xl tracking-[0.5em] uppercase font-bold">
            todo
          </h1>
          <img src={moonIcon} alt="mode icon" className="w-5 h-5" />
        </header>

        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
            <span className="w-5 h-5 border border-[#E3E4F1] rounded-full"></span>
          </div>
          <input
            type="text"
            placeholder="Create a new todo..."
            className="bg-white w-full max-w-xl p-4 rounded-sm text-xs placeholder:pl-9"
          />
        </div>

        <ul className="w-full max-w-xl bg-white text-xs text-[#494C6B] mt-4 rounded-sm shadow-xs z-10">
          <li className="relative w-full border-b border-[#E3E4F1] flex items-center justify-between p-4">
            <label className="flex items-center w-full cursor-pointer relative">
              <input
                type="checkbox"
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
                test
              </p>
            </label>

            <button className="w-3 h-3 shrink-0">
              <img src={crossIcon} alt="cross icon" />
            </button>
          </li>
          <li className="relative w-full border-b border-[#E3E4F1] flex items-center justify-between p-4">
            <label className="flex items-center w-full cursor-pointer relative">
              <input
                type="checkbox"
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
                test
              </p>
            </label>

            <button className="w-3 h-3 shrink-0">
              <img src={crossIcon} alt="cross icon" />
            </button>
          </li>
          <li className="relative w-full border-b border-[#E3E4F1] flex items-center justify-between p-4">
            <label className="flex items-center w-full cursor-pointer relative">
              <input
                type="checkbox"
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
                test
              </p>
            </label>

            <button className="w-3 h-3 shrink-0">
              <img src={crossIcon} alt="cross icon" />
            </button>
          </li>
          <li className="relative w-full border-b border-[#E3E4F1] flex items-center justify-between p-4">
            <label className="flex items-center w-full cursor-pointer relative">
              <input
                type="checkbox"
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
                test
              </p>
            </label>

            <button className="w-3 h-3 shrink-0">
              <img src={crossIcon} alt="cross icon" />
            </button>
          </li>
          <li className="relative w-full border-b border-[#E3E4F1] flex items-center justify-between p-4">
            <label className="flex items-center w-full cursor-pointer relative">
              <input
                type="checkbox"
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
                test
              </p>
            </label>

            <button className="w-3 h-3 shrink-0">
              <img src={crossIcon} alt="cross icon" />
            </button>
          </li>
          <li className="relative w-full border-b border-[#E3E4F1] flex items-center justify-between p-4">
            <label className="flex items-center w-full cursor-pointer relative">
              <input
                type="checkbox"
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
                test
              </p>
            </label>

            <button className="w-3 h-3 shrink-0">
              <img src={crossIcon} alt="cross icon" />
            </button>
          </li>
        </ul>
      </div>
      <div className="px-6 mt-4">
        <p>5 items left</p>
        <button>clear completed</button>
      </div>

      <footer className="text-center mt-10 text-sm text-gray-400">
        Drag and drop to reorder list
      </footer>
    </div>
  );
};

export default App;
