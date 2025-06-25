import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import Button from "./Button";
import NavLinks from "./NavLinks"; 
import { IoMdArrowDropdown } from "react-icons/io";

export function SigninDropdown() {
  const [open, setOpen] = useState(false);

  const menuRef = useRef();
  const headRef = useRef();

  window.addEventListener("click", (e) => {
    if (e.target !== menuRef.current && e.target !== headRef.current) {
      setOpen(false);
    }
  });

  return (
    <div>
      <div
        ref={headRef}
        onClick={() => setOpen(!open)}
        className="data-[active]:text-[#98c1d9] cursor-pointer transition-all duration-200 hover:text-[#00b4d8] text-[1.15rem] flex items-center p-2">
        Sign In<IoMdArrowDropdown />
      </div>
      {
        open && (
          <div
            ref={menuRef}
            anchor="bottom" className='bg-white max-[1024px]:top-[5.5rem] max-[1024px]:left-0 text-[#263733] absolute rounded lg:mt-8 right-0 p-7 md:p-4 text-[1.1rem] w-[20rem] z-50 lg:z-10'>
            <div className=' mb-4 border-b-2'>
              <h2 className='font-semibold mb-3'>Registered Users</h2>
              <p className='mb-3'>Have an account? Sign in now.</p>
              <p className='mb-6'><a href="/signup" className='underline text-[#0077b6]'>Sign In</a></p>
            </div>
            <div>
              <h2 className='font-semibold mb-3'>New Customer</h2>
              <p className='mb-3'>New to Papacs? Create an account to get started today.</p>
              <a href="/login" className='underline text-[#0077b6]'>Create an Account</a>
            </div>
          </div>
        )
      }

    </div>
  )
}

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white relative sticky top-0 z-50 drop-shadow-md">
      <div className="flex items-center font-medium justify-around">
        <div className="z-40 p-2 lg:w-auto w-full flex justify-between">
          <img src={logo} alt="logo" className="lg:cursor-pointer h-16 w-36" />
          <div className="text-4xl mr-2 flex items-center lg:hidden text-[#00b4d8] cursor-pointer" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="lg:flex hidden uppercase items-center gap-8 font-[Poppins]">
          <li>
            <Link to="/" className="py-7 px-3 text-[1.1rem] inline-block hover:text-[#00b4d8] transition-all duration-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="py-7 px-3 text-[1.1rem] inline-block hover:text-[#00b4d8] transition-all duration-200">
              About us
            </Link>
          </li>
          <NavLinks />
          <li>
            <Link to="/blogs" className="py-7 px-3 text-[1.1rem] inline-block hover:text-[#00b4d8] transition-all duration-200">
              Blogs
            </Link>
          </li>
          <li>
            <Link to="/careers" className="py-7 px-3 text-[1.1rem] inline-block hover:text-[#00b4d8] transition-all duration-200">
              Careers
            </Link>
          </li>
        </ul>
        <div className="lg:flex items-center block hidden">
          <Button />
          <div className="ml-8"><SigninDropdown /></div>
        </div>
        {/* Mobile nav */}
        <ul
          className={`
        lg:hidden bg-black text-white fixed w-full top-0 overflow-y-auto min-h-screen py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link to="/" className="py-4 text-[1.07rem] px-3 inline-block hover:text-[#00b4d8] transition-all duration-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="py-4 text-[1.07rem] px-3 inline-block hover:text-[#00b4d8] transition-all duration-200">
              About us
            </Link>
          </li>
          {/* <NavLinks /> */}
          <li>
            <Link to="/blogs" className="py-4 text-[1.07rem] px-3 inline-block hover:text-[#00b4d8] transition-all duration-200">
              Blogs
            </Link>
          </li>
          <li>
            <Link to="/careers" className="py-4 text-[1.07rem] px-3 inline-block hover:text-[#00b4d8] transition-all duration-200">
              Careers
            </Link>
          </li>
          <div className="flex py-5">
            <Button />
            <div className="ml-8"><SigninDropdown /></div>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
