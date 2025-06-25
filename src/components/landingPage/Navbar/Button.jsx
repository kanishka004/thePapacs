import React from "react";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <button className="hover:from-[#00b4d8] hover:to-[#0077b6] ... bg-gradient-to-r from-[#0077b6] to-[#00b4d8] ... transition-all duration-500 text-[1.1rem] text-white  px-6 py-2 rounded-full">
      <Link to='/contactus'>Contact Us</Link>
    </button>
  );
};

export default Button;
