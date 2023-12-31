"use client";
import { useEffect, useState } from "react";
import Body1 from "./Body";
import { BiBookBookmark, BiBookmark, BiUserCircle } from "react-icons/bi";
import TextH1 from "../atoms/TextH1";
import TextH2 from "../atoms/TextH2";
import TextH3 from "../atoms/TextH3";

function Sidebar() {
  // const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
  const [selectedOption, setSelectedOption] = useState("profesores");
  const [showForm, setShowForm] = useState(false);
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    localStorage.getItem("dark");
    const isDark = localStorage.getItem("dark");
    if (isDark) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, [setDarkMode]);

  const handleClickDark = () => {
    if (!darkMode) {
      setDarkMode(true);
      localStorage.setItem("dark", "true");
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      localStorage.removeItem("dark");
      document.documentElement.classList.remove("dark");
    }
  };

  // const handleToggle = (e) => {
  //   if (e.target.checked){
  //     setTheme("dark")
  //   }else{
  //     setTheme("light")
  //   }
  // };

  // useEffect(() => {
  //   localStorage.setItem("theme", theme)
  //   const locaTheme = localStorage.getItem("theme");
  //   document.querySelector("html").setAttribute("data-theme", locaTheme);
  // }, [theme]);

  const options = [
    {
      option: "profesores",
      icon: <BiUserCircle className="text-color-primary w-full h-full flex" />,
    },
    {
      option: "materias",
      icon: (
        <BiBookBookmark className="text-color-primary w-full h-full flex" />
      ),
    },
    {
      option: "aulas",
      icon: <BiBookmark className="text-color-primary w-full h-full flex" />,
    },
  ];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div
      name="bg-aplication"
      className="
      grid
      grid-cols-12
      grid-rows-6
      col-start-1
      col-end-3
      w-full
      h-full"
    >
      <div
        name="avatar"
        className=" col-start-1 flex flex-col items-center  col-end-3  pt-7 row-start-1 row-span-2 h-full w-full"
      >
        <BiUserCircle className=" w-[50px] h-[50px] text-color-primary" />
        <TextH2 content={"Enmanuel Vivas"} customStyle={" font-medium  "} />
        <TextH3
          content={"enmanuelvivas.22@gmail.com"}
          customStyle={" font-medium "}
        />
      </div>

      <div
        name="menu"
        className=" pl-3 col-start-1 col-end-3 py-4 row-start-3 w-full"
      >
        {options.map((item, index) => (
          <div key={index}>
            <label
              className="flex gap-4 mb-7 cursor-pointer items-center"
              onClick={() => {
                handleOptionSelect(item.option);
              }}
            >
              <span className="appearance-none w-[30px] h-[30px]">
                {item.icon}
              </span>
              <span
                className={`${
                  selectedOption === item.option
                    ? "text-color-primary text-base capitalize border-l-4 pl-3 rounded-md border-l-color-primary "
                    : "appearance-none  text-sm text-color-neutral-700 capitalize w-[30px] h-[30px]"
                }`}
              >
                {item.option}
              </span>
            </label>
          </div>
        ))}
      </div>

      <div name="body" className="col-start-3  col-end-13 row-span-full">
        <Body1 selectedOption={selectedOption} />

        <div />
      </div>

      <div
        name="toogle dark-mode"
        className=" pl-4  flex col-span-2 items-center  justify-start row-start-6 w-full row-span-6 relative  h-7"
      >
        <label className="swap swap-rotate">
          <input
            type="checkbox"
            onChange={handleClickDark}
            checked={darkMode}
          />

          {/* sun icon */}
          <svg
            className="swap-on fill-current w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-off fill-current w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </div>
    </div>
  );
}

export default Sidebar;
