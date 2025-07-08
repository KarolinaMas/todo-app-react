import React, { useState } from "react";
import moonIcon from "./assets/images/icon-moon.svg";
import bgImage from "./assets/images/bg-image.jpg";
import ListItem from "./components/ListItem";

const App = () => {
  const [inputVal, setInputVal] = useState("");
  const [itemList, setItemList] = useState([]);
  const [filterOptions, setFilterOptions] = useState([
    { name: "All", isOn: true },
    { name: "Active", isOn: false },
    { name: "Completed", isOn: false },
  ]);

  function createItem() {
    if (inputVal.trim() !== "") {
      setItemList((prev) => [
        ...prev,
        { value: inputVal.trim(), isCompleted: false },
      ]);
      setInputVal("");
    }
  }

  function addItem(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      createItem();
    }
  }

  function deleteItem(value) {
    setItemList((prev) => prev.filter((item) => item.value !== value));
  }

  function toggleCheckbox(value) {
    setItemList((prev) =>
      prev.map((item) =>
        item.value === value
          ? { ...item, isCompleted: !item.isCompleted }
          : item
      )
    );
  }

  function handleFilterClick(name) {
    setFilterOptions((prev) =>
      prev.map((item) =>
        item.name === name ? { ...item, isOn: true } : { ...item, isOn: false }
      )
    );
  }

  function clearCompleted() {
    setItemList((prev) => prev.filter((item) => !item.isCompleted));
  }

  const activeFilter = filterOptions.find((item) => item.isOn)?.name;
  const filteredItems =
    activeFilter === "All"
      ? itemList
      : activeFilter === "Active"
      ? itemList.filter((item) => !item.isCompleted)
      : itemList.filter((item) => item.isCompleted);

  return (
    <div className="min-h-[100vh] bg-[#FAFAFA] text-xs sm:text-lg">
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
      <div className="max-w-[540px] flex flex-col items-center px-6 -mt-40 mx-auto sm:-mt-49">
        <header className="flex justify-between items-center w-full mb-8 text-white z-10">
          <h1 className="text-2xl tracking-[0.5em] uppercase font-bold sm:text-[2.5rem]">
            todo
          </h1>
          <img
            src={moonIcon}
            alt="mode icon"
            className="w-5 h-5 sm:w-7 sm:h-7"
          />
        </header>

        <div className="relative w-full">
          <div
            className="absolute inset-y-0 left-0 flex items-center pl-5 cursor-pointer"
            onClick={() => createItem()}
          >
            <span className="w-5 h-5 border border-[#E3E4F1] rounded-full"></span>
          </div>
          <input
            type="text"
            placeholder="Create a new todo..."
            className="bg-white text-[#393A4B] w-full p-4 rounded-sm pl-14 focus:outline-0 sm:px-6 sm:pl-15"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={addItem}
          />
        </div>

        <section className="w-full text-[#494C6B] mt-4 rounded-sm z-10 shadow-[0px_3px_38px_0px_rgba(148,149,165,0.35)]">
          <ul className="w-full">
            {filteredItems.map(({ value, isCompleted }) => (
              <ListItem
                key={value}
                isChecked={isCompleted}
                deleteItem={() => deleteItem(value)}
                toggle={() => toggleCheckbox(value)}
              >
                {value}
              </ListItem>
            ))}
          </ul>
          <div className=" bg-white p-4 text-[#9495A5] flex justify-between items-center w-full rounded-sm sm:text-sm sm:px-6">
            <p>
              {filteredItems.filter((item) => !item.isCompleted).length} items
              left
            </p>
            <nav className="hidden sm:block">
              <ul className="flex gap-6 text-sm font-bold justify-center">
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
            </nav>
            <button
              onClick={clearCompleted}
              className="cursor-pointer hover:text-[#494C6B]"
            >
              Clear Completed
            </button>
          </div>
        </section>
        <nav className="sm:hidden w-full z-20">
          <ul className="bg-white z-20 rounded-sm flex gap-6 text-sm font-bold p-4 justify-center mt-4 shadow-[0px_1px_20px_0px_rgba(148,149,165,0.35)]">
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
        </nav>

        <footer className="text-center mt-10 text-sm text-gray-400">
          Drag and drop to reorder list
        </footer>
      </div>
    </div>
  );
};

export default App;
