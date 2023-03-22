import React, {useState} from "react"
import logo from "../assets/logo.png"
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

import {BsFillMoonFill} from "react-icons/bs";
import {ImSun} from "react-icons/im";

function Nav () {
    const [navState, setNavState] = useState(false);
    const [themeColor, setThemeColor] = useState(false);

    return (
         <nav className="w-full bg-gray-400 ">
            <div className="justify-between px-2 mx-auto lg:max-w-7xl md:items-center md:flex ">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <a href="javascript:void(0)">
                        <img src={logo} alt="logo" className=" h-[100%] " />
                        </a>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavState(!navState)}
                            >
                                  {navState ? (
                            <MdClose onClick={() => setNavState(false)} />
                        ) : (
                            <GiHamburgerMenu onClick={() => setNavState(true)} />
                        )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navState ? "block" : "hidden"
                        }`}
                    >
                         <ul className="items-center justify-center space-y-4 md:flex md:space-x-6 md:space-y-0">
                    <li className="nav-item">
                        <a className="px-3 "  href="#features">Features</a>
                    </li>
                    <li className="nav-item">
                        <a  className="px-3  " href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="px-3" href="#launch">Launch</a>
                    </li>
                    <li className="nav-item">
                        <a className="px-3" href="#signup">Sign Up</a>
                    </li>
                    <li>

                    <button className="px-3"
                        onClick={() => setThemeColor(!themeColor)}
                    >  
                    {themeColor ? (
                        <ImSun className=" text-yellow-300 " /> 
                            ) : (
                        <BsFillMoonFill className=" dark " />
                    )}
                    </button>
                    </li>
                </ul>
                    </div>
                </div>
            </div>
        </nav> 

    )
};

export default Nav;

