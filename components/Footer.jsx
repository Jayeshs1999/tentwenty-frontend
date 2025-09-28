import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="p-8 mt-4 mb-4 bg-[#FFFFFF] rounded-[8px] text-center text-[14px] text-[#6B7280]">
      © {year} tentwenty. All rights reserved.
    </div>
  );
};

export default Footer;
