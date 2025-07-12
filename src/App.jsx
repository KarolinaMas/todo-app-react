import React, { useEffect, useState } from "react";
import moonIcon from "./assets/images/icon-moon.svg";
import sunIcon from "./assets/images/icon-sun.svg";
import bgImage from "./assets/images/bg-image.jpg";
import ListItem from "./components/ListItem";
import FilterBar from "./components/FilterBar";

const App = () => {
  const [inputVal, setInputVal] = useState("");
  const [itemList, setItemList] = useState(() => {
    const stored = localStorage.getItem("itemList");

    if (stored && stored !== "undefined") {
      return JSON.parse(stored);
    }
    return [];
  });
  const [filterOptions, setFilterOptions] = useState([
    { name: "All", isOn: true },
    { name: "Active", isOn: false },
    { name: "Completed", isOn: false },
  ]);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const stored = localStorage.getItem("mode");

    if (stored !== null && stored !== undefined) {
      return JSON.parse(stored);
    }

    return document.documentElement.classList.contains("dark");
  });

  useEffect(() => {
    localStorage.setItem("itemList", JSON.stringify(itemList));
  }, [itemList]);

  useEffect(() => {
    if (!isDarkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }

    localStorage.setItem("mode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

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
    <div
      className="
        min-h-[100vh] bg-[#FAFAFA] text-xs 
        sm:text-lg
        dark:bg-[#171823]
      "
    >
      <img
        src={bgImage}
        alt="img"
        aria-hidden
        className="
          h-[200px] max-h-[35vh] object-cover w-full 
          sm:h-auto
        "
      />
      <div
        className="
          absolute inset-0 w-full h-[200px] max-h-[35vh] bg-gradient-to-tl from-[#5596FF] to-[#AC2DEB] opacity-70 pointer-events-none
          sm:h-auto
          dark:from-[#3710BD] dark:to-[#A42395]
        "
        aria-hidden="true"
      />
      <div
        className="
          max-w-[540px] flex flex-col items-center px-6 -mt-40 mx-auto 
          sm:-mt-49
        "
      >
        <header className="flex justify-between items-center w-full mb-8 text-white z-10">
          <h1
            className="
                text-2xl tracking-[0.5em] uppercase font-bold 
                sm:text-[2.5rem]
              "
          >
            todo
          </h1>
          <img
            src={isDarkMode ? sunIcon : moonIcon}
            alt="mode icon"
            className="
              w-5 h-5 cursor-pointer
              sm:w-7 sm:h-7
            "
            onClick={() => toggleDarkMode()}
          />
        </header>

        <div className="relative w-full">
          <div
            className="absolute inset-y-0 left-0 flex items-center pl-5 cursor-pointer"
            onClick={() => createItem()}
          >
            <span
              className="
                    w-5 h-5 border border-[#E3E4F1] rounded-full
                    dark:border-[#393A4B]
                  "
            ></span>
          </div>
          <input
            type="text"
            placeholder="Create a new todo..."
            className="
              bg-white text-[#393A4B] w-full p-4 rounded-sm pl-14 
              focus:outline-0 
              sm:px-6 sm:pl-15
              dark:bg-[#25273D] dark:text-[#767992]
            "
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={addItem}
          />
        </div>

        <section
          className="
                  w-full text-[#494C6B] mt-4 rounded-sm z-10 shadow-[0px_3px_38px_0px_rgba(148,149,165,0.35)]
                  dark:shadow-none
                "
        >
          <ul className="w-full">
            {filteredItems.map(({ value, isCompleted }) => (
              <ListItem
                key={crypto.randomUUID()}
                isChecked={isCompleted}
                deleteItem={() => deleteItem(value)}
                toggle={() => toggleCheckbox(value)}
              >
                {value}
              </ListItem>
            ))}
          </ul>
          <div
            className="
              bg-white p-4 text-[#9495A5] flex justify-between items-center w-full rounded-sm 
              sm:text-sm sm:px-6
              dark:bg-[#25273D] dark:text-[#5B5E7E]
            "
          >
            <p>
              {filteredItems.filter((item) => !item.isCompleted).length} items
              left
            </p>
            <nav className="hidden sm:block">
              <FilterBar
                filterOptions={filterOptions}
                handleFilterClick={handleFilterClick}
                isInSection={true}
              />
            </nav>
            <button
              onClick={clearCompleted}
              className="cursor-pointer hover:text-[#494C6B]"
            >
              Clear Completed
            </button>
          </div>
        </section>
        <nav className="w-full z-20 sm:hidden">
          <FilterBar
            filterOptions={filterOptions}
            handleFilterClick={handleFilterClick}
            isInSection={false}
          />
        </nav>

        <footer className="text-center my-10 text-sm text-gray-400 dark:text-[#5B5E7E]">
          Drag and drop to reorder list
        </footer>
      </div>
    </div>
  );
};

export default App;
