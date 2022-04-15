import React from "react";
import logo from "../../assets/social-logo.png";
import { useData } from "../../context/data/dataContext";

export function NavBar() {
  return (
    <div className="hidden sticky top-0 bg-white px-3 py-1 md:block">
      <div className="flex justify-center items-center ">
        <img className="h-12" src={logo} />
      </div>
    </div>
  );
}
