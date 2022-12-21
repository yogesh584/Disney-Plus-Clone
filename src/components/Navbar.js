import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <div className="sticky top-0 flex justify-between items-center bg-[#0c111b] py-5 px-2 w-[95%] mx-auto font-roboto">
            {/* Header Left */}
            <div className="flex items-center gap-4">
                <div className="flex flex-col gap-1 w-5 cursor-pointer">
                    <div className="h-[2px] bg-[#ffffff99] w-full"></div>
                    <div className="h-[2px] bg-[#ffffff99] w-full"></div>
                    <div className="h-[2px] bg-[#ffffff99] w-full"></div>
                </div>
                <div>
                    <Link to="/">
                        <img
                            src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg"
                            alt="Logo"
                            className="h-full translate-y-[-6px]"
                        />
                    </Link>
                </div>
                <ul className="flex gap-6">
                    <li>
                        <a
                            href="/"
                            className="text-[#ffffffcc] hover:text-white"
                        >
                            TV
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            className="text-[#ffffffcc] hover:text-white"
                        >
                            Movies
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            className="text-[#ffffffcc] hover:text-white"
                        >
                            Sports
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            className="text-[#ffffffcc] hover:text-white"
                        >
                            Disney+
                        </a>
                    </li>
                </ul>
            </div>
            {/* Header Right */}
            <div className="flex gap-3 items-center">
                <form action="">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search"
                            className="text-[#ffffffcc] bg-transparent border-b-[1px] border-[#ffffffcc] outline-none py-1 transition-all text-sm"
                            onBlur={(e) => {
                                e.target.classList.toggle("w-72");
                                e.target.classList.toggle("border-[#1f80e0]");
                            }}
                            onFocus={(e) => {
                                e.target.classList.toggle("w-72");
                                e.target.classList.toggle("border-[#1f80e0]");
                            }}
                        />
                        <FontAwesomeIcon
                            icon={faMagnifyingGlass}
                            className=" h-3 w-3 absolute right-2 top-1/2 translate-y-[-50%] text-[#909999]"
                        />
                    </div>
                </form>
                <Link
                    to="/subscribe"
                    className="uppercase inline-block px-2 py-1 bg-[#1f80e0] font-bold rounded-md text-xs text-white tracking-wider"
                >
                    Subscribe
                </Link>
                <button className="uppercase text-white text-sm">LOGIN</button>
            </div>
        </div>
    );
};

export default Navbar;
