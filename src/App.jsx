import React, { useState } from "react";
import moonIcon from "./assets/images/icon-moon.svg";
import bgImage from "./assets/images/bg-image.jpg";
import ListItem from "./components/ListItem";

const App = () => {
  const [inputVal, setInputVal] = useState("");
  const [itemList, setItemList] = useState([]);

  function addItem(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      setItemList((prev) => [...prev, { value: inputVal, isCompleted: false }]);
      setInputVal("");
    }
  }

  function deleteItem(value) {
    setItemList((prev) => prev.filter((item) => item.value !== value));
  }

  return (
    <div className="min-h-[100vh] bg-[#FAFAFA] text-xs">
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
      <div className="w-full flex flex-col items-center px-6 -mt-40">
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
            className="bg-white text-[#393A4B] w-full max-w-xl p-4 rounded-sm pl-14 focus:outline-0"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={(e) => addItem(e)}
          />
        </div>

        <section className="w-full max-w-xl bg-white  text-[#494C6B] mt-4 rounded-sm z-10 shadow-[0px_3px_38px_0px_rgba(148,149,165,0.35)]">
          <ul className="w-full">
            {itemList.map(({ value, isCompleted }) => (
              <ListItem
                key={value}
                isChecked={isCompleted}
                deleteItem={() => deleteItem(value)}
              >
                {value}
              </ListItem>
            ))}
          </ul>
          <div className="p-4 text-[#9495A5] flex justify-between w-full">
            <p>{itemList.length} items left</p>
            <button>Clear Completed</button>
          </div>
        </section>

        <footer className="text-center mt-10 text-sm text-gray-400">
          Drag and drop to reorder list
        </footer>
      </div>
    </div>
  );
};

export default App;
