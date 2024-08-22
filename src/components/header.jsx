import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Input from "./ui/input";
import { Search } from "lucide-react";

const Header = () => {
  const headerItems = [
    { id: 1, href: "/home", lable: "خانه" },
    { id: 2, href: "/ourServices", lable: "خدمات ما" },
    { id: 3, href: "/aboutUs", lable: "درباره ما " },
    { id: 4, href: "/articles", lable: "مقالات " },
    { id: 5, href: "/contact", lable: "تماس با ما" },
  ];
  const { pathname } = useLocation();
  return (
    <nav className="flex flex-row-reverse justify-evenly w-full bg-gray-200 items-center">
      <ul className="flex flex-row-reverse  py-1 items-center w-full justify-center">
        {headerItems.map((item) => {
          return (
            <li
              key={item.id}
              className={`py-2 px-4 font-iranSans mx-4 ${
                pathname === item.href
                  ? "border-b-4 border-purple-500 font-bold "
                  : ""
              }`}
            >
              <NavLink to={item.href}>{item.lable} </NavLink>
            </li>
          );
        })}
        <div className="px-6 bg-purple-600 py-1 flex flex-row-reverse items-center ">
          <button type="button" className=" text-white pl-2">
            <Search />
          </button>
          <Input
            type={"search"}
            palceholder={"جستجو"}
            className={"text-white "}
          ></Input>
        </div>
      </ul>
    </nav>
  );
};

export default Header;
