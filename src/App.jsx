import React from "react";
import moonIcon from "./assets/images/icon-moon.svg";
import bgImage from "./assets/images/bg-image.jpg";

const App = () => {
  return (
    <div className="min-h-[100vh] bg-[#FAFAFA] relative">
      <img
        src={bgImage}
        alt="img"
        aria-hidden
        className="h-[200px] sm:h-auto max-h-[35vh] object-cover w-full"
      />

      <div className="w-full flex flex-col items-center px-6 -mt-40 mb-5">
        <header className="flex justify-between items-center w-full max-w-xl mb-6 text-white">
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
            className="bg-white w-full max-w-xl p-4 rounded-[5px] text-xs placeholder:p-9"
          />
        </div>

        <ul className="w-full max-w-xl bg-white mt-4 rounded-md shadow-md">
          <li className="p-4 border-b">test</li>
          <li className="p-4 border-b">test</li>
          <li className="p-4 border-b">test</li>
          <li className="p-4 border-b">test</li>
          <li className="p-4 border-b">test</li>
          <li className="p-4 border-b">test</li>
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
