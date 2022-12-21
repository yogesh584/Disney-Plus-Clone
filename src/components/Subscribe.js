import React from "react";
import CheckIcon from "../images/icons/check.svg";
import CrossIcon from "../images/icons/cross.svg";

const Subscribe = () => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center mt-[70px] text-white w-full">
                <h1 className="text-2xl mb-5">
                    Subscribe to watch all content on Disney+ Hotstar
                </h1>
                <div className="bg-[#171f31] inline-block px-12 rounded-lg pt-3 pb-9 w-3/5 mb-6">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr>
                                <th></th>
                                <th className="super" id="superTitle">
                                    Super
                                </th>
                                <th className="premium" id="premiumTitle">
                                    Premium
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-3 text-[#d1d2d6] border-b-[1px] border-[#2e333366] ">
                                    All Content
                                    <br></br>
                                    <span className="text-xs text-[#1f80e0]">
                                        Movies, live sports, TV, Specials
                                    </span>
                                </td>
                                <td className="super py-3 text-[#d1d2d6] border-b-[1px] border-[#2e333366] ">
                                    <img
                                        src={CheckIcon}
                                        className="h-6 mx-auto"
                                        alt="Check Icon"
                                    />
                                </td>
                                <td className="premium py-3 text-[#d1d2d6] border-b-[1px] border-[#2e333366]">
                                    <img
                                        src={CheckIcon}
                                        alt="Check Icon"
                                        className="h-6 mx-auto"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="py-3 text-[#d1d2d6] border-b-[1px] border-[#2e333366]">
                                    Watch on TV or Laptop
                                </td>
                                <td className="super py-3 text-[#d1d2d6] border-b-[1px] border-[#2e333366]">
                                    <img
                                        src={CheckIcon}
                                        alt="Check Icon"
                                        className="h-6 mx-auto"
                                    />
                                </td>
                                <td className="premium py-3 text-[#d1d2d6] border-b-[1px] border-[#2e333366]">
                                    <img
                                        src={CheckIcon}
                                        alt="Check Icon"
                                        className="h-6 mx-auto"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="py-3 text-[#d1d2d6] border-b-[1px] border-[#2e333366]">
                                    Ads free movies and shows (except sports)
                                </td>
                                <td className="super py-3 text-[#d1d2d6] border-b-[1px] border-[#2e333366]">
                                    <img
                                        src={CrossIcon}
                                        alt="Cross Icon"
                                        className="h-6 mx-auto"
                                    />
                                </td>
                                <td className="premium py-3 text-[#d1d2d6] border-b-[1px] border-[#2e333366]">
                                    <img
                                        src={CheckIcon}
                                        alt="Check Icon"
                                        className="h-6 mx-auto"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="py-3 text-[#d1d2d6] border-b-[1px] border-[#2e333366]">
                                    Number of devices that can be logged in
                                </td>
                                <td className="super py-3 text-[#d1d2d6] border-b-[1px] border-[#2e333366] text-center">
                                    2
                                </td>
                                <td className="premium py-3 text-[#d1d2d6] border-b-[1px] border-[#2e333366] text-center">
                                    4
                                </td>
                            </tr>
                            <tr>
                                <td className="py-3 text-[#d1d2d6] border-b-[1px] border-[#2e333366]">
                                    Max video quality
                                </td>
                                <td className="super py-3 text-[#d1d2d6] border-b-[1px] border-[#2e333366] text-center">
                                    Full HD (1080p)
                                </td>
                                <td className="premium py-3 text-[#d1d2d6] border-b-[1px] border-[#2e333366] text-center">
                                    4K (2160p)
                                </td>
                            </tr>
                            <tr>
                                <td className="py-3 text-[#d1d2d6] border-b-[1px] border-[#2e333366]">
                                    Max audio quality
                                </td>
                                <td className="super py-3 text-[#d1d2d6] border-b-[1px] border-[#2e333366] text-center">
                                    Dolby 5.1
                                </td>
                                <td className="premium py-3 text-[#d1d2d6] border-b-[1px] border-[#2e333366] text-center">
                                    Dolby 5.1
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="flex justify-between mt-3 gap-3">
                        <div className="border-[1px] border-[#334366] px-2 rounded-md flex flex-col gap-2 py-2 w-1/3 cursor-pointer bg-[#1f80e066]">
                            <h2 className="font-bold text-md">Super</h2>
                            <p className="text-lg">
                                Rs. <span className="font-bold">899</span>/Year
                            </p>
                        </div>
                        <div className="border-[1px] border-[#334366] px-2 rounded-md flex flex-col gap-2 py-2 w-1/3 cursor-pointer">
                            <h2 className="font-bold text-md">Premium</h2>
                            <p className="text-lg">
                                Rs. <span className="font-bold">1499 </span>
                                /Year
                            </p>
                        </div>
                        <div className="border-[1px] border-[#334366] px-2 rounded-md flex flex-col gap-2 py-2 w-1/3 cursor-pointer">
                            <h2 className="font-bold text-md">Premium</h2>
                            <p className="text-lg">
                                Rs. <span className="font-bold">299</span>/Month
                            </p>
                        </div>
                    </div>

                    <button className="uppercase w-full mt-4 py-3 font-bold bg-[#1f80e0] rounded-md">
                        CONTINUE WITH Super
                    </button>
                </div>
            </div>
            <div className="w-[93%] mx-auto text-white text-sm">
                <p>
                    In case of any query, email us at{" "}
                    <a
                        href="mailto:subscribe@hotstar.com"
                        className="text-[#1f80e0]"
                    >
                        subscribe@hotstar.com
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Subscribe;
