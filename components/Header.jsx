import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import { getUserInfo } from "../utils/getUserInfo";

const Header = () => {
  const userInfo = getUserInfo();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    sessionStorage.removeItem("userInfo");
    window.location.href = "/login";
  };

  return (
    <div className="p-3 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto flex items-center justify-between ">
        <div className="flex items-center gap-8">
          <h1
            className="text-[black] text-[24px] font-semibold
"
          >
            ticktock
          </h1>
          <div>
            <Link to="/" className="text-[14px]">
              Timesheets
            </Link>
          </div>
        </div>

        <div className="relative inline-block" ref={dropdownRef}>
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center text-sm font-medium text-gray-900 rounded-full p-2 hover:text-blue-600 dark:hover:text-blue-500 focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600 dark:text-white"
          >
            {userInfo?.email.substring(0, 6) + "..."}{" "}
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          {open && (
            <div className="absolute right-0 mt-2 z-10 w-32 bg-white rounded-lg shadow-md dark:bg-gray-700">
              <button
                onClick={handleLogout}
                className="w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
