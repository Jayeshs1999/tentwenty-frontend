import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className=" px-4 sm:px-6 md:px-10 lg:px-20 xl:px-35 ">
      <div className="p-8 mt-4 mb-4 bg-[#FFFFFF] rounded-[8px] text-center text-[14px] text-[#6B7280]  ">
        © {year} tentwenty. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
