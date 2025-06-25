import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./Mylinks";


const NavLinks = () => {
  const [heading, setHeading] = useState("");
  return (
    <>
      {links.map((link) => (
        <div>
          <div className="px-3 text-left md:cursor-pointer group">
            <h1
              className="py-3 cursor-pointer text-[1.1rem] flex justify-between items-center md:pr-0 pr-5 group hover:text-[#00b4d8] transition-all duration-200"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
              }}
            >
              {link.name}
              <span className="text-xl lg:hidden inline">
                <ion-icon
                  name={`${heading === link.name ? "chevron-up" : "chevron-down"
                    }`}
                ></ion-icon>
              </span>
              <span className="text-xl lg:mt-1 lg:ml-2 lg:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <ion-icon name="chevron-down"></ion-icon>
              </span>
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute top-15 hidden group-hover:lg:block hover:lg:block">
                  <div className="py-3">
                    <div
                      className="w-4 h-4 left-3 absolute 
                    mt-1 bg-white rotate-45"
                    ></div>
                  </div>
                  <div className="bg-white p-5 grid grid-cols-3">
                    {link.sublinks.map((mysublinks) => (
                      <div>
                        {mysublinks.sublink1.map((slink) => (
                          <li className="text-sm capitalize text-gray-600 hover:text-white my-2.5 p-1 hover:bg-[#f77f00]">
                            <Link
                              to={slink.link}
                              className=" text-[1rem]"
                            >
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                    {link.sublinks.map((mysublinks) => (
                      <div className="ml-">
                        {mysublinks.sublink2.map((slink) => (
                          <li className="text-sm capitalize text-gray-600 hover:text-white my-2.5 p-1 hover:bg-[#f77f00]">
                            <Link
                              to={slink.link}
                              className=" text-[1rem]"
                            >
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                    {link.sublinks.map((mysublinks) => (
                      <div className="ml-3">
                        {mysublinks.sublink3.map((slink) => (
                          <li className="text-sm capitalize text-gray-600 hover:text-white my-2.5 p-1 hover:bg-[#f77f00]">
                            <Link
                              to={slink.link}
                              className=" text-[1rem]"
                            >
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          



        </div>
      ))}
    </>
  );
};

export default NavLinks;
