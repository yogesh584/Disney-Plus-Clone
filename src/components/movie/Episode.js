import React from "react";

const Episode = (props) => {
    const { name, tags, smallDesc, thumnail } = props;
    return (
        <div className="z-10 group h-32">
            <a
                href="/"
                className="h-full block relative  mr-3 transition group-hover:scale-125 group-hover:z-10"
            >
                <div className="h-full w-full mr-2">
                    <img
                        src={thumnail}
                        alt={name}
                        className="w-full rounded-md h-full"
                    />
                </div>
                <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all absolute bottom-0 text-white  bg-gradient-to-t from-[#192133] via-[#192133]">
                    <h3 className="text-sm font-bold mx-4">{name}</h3>
                    <h5 className="text-[10px] font-bold mx-4">{tags}</h5>
                    <p className="text-[9px] mt-1 mx-4">{smallDesc}</p>
                    <button className="text-[9px] text-left w-[90%] uppercase py-1 rounded-sm mb-[7px] mx-2 px-2 transition hover:bg-[#ffffff26]">
                        <span className="mr-2 text-[10px]">+</span> ADD to Watch
                        List
                    </button>
                </div>
            </a>
        </div>
    );
};

export default Episode;
