import React from "react";
import { Link } from "react-router";
import { getUserInfo } from "../utils/getUserInfo";

const Header = () => {
  const userInfo = getUserInfo();

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
        <h5 className="text-[#6B7280] font-medium ">{userInfo?.email}</h5>
      </div>
    </div>
  );
};

export default Header;
