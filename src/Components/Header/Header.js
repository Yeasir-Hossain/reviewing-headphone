import React from "react";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <div className="bg-slate-900 py-5">
      <div className="  flex gap-5 text-xl font-bold justify-center">
        <CustomLink to="/">HOME</CustomLink>
        <CustomLink to="/reviews">REVIEWS</CustomLink>
        <CustomLink to="/chart">CHART</CustomLink>
        <CustomLink to="/faq">FAQ</CustomLink>
        <CustomLink to="/about">ABOUT</CustomLink>
      </div>
    </div>
  );
};

export default Header;