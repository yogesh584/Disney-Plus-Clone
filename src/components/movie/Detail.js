import React from "react";
import Movies from "../Home/Movies";
import Episodes from "./Episodes";
import PlayIcon from "../../images/icons/play.svg";
import PlusIcon from "../../images/icons/plus.svg";
import ShareIcon from "../../images/icons/share.svg";

const Detail = () => {
    return (
        <div>
            <div>
                <div className="flex justify-between w-[95%] mx-auto bg-[#030b17] rounded-md h-[400px]">
                    <div className="relative w-[37%] h-full py-12 px-10 text-white">
                        <h1 className="font-bold text-3xl">Escaype Live</h1>
                        <h3 className="text-base my-2  text-[#ffffff99]">
                            Thriller, Hindi, Hostar Specials
                        </h3>
                        <p className="text-[17px] w-[110%] z-10 text-[#ffffffcc] leading-7">
                            A live-streaming app announces a contest, promising
                            instant fame and fortune to its most popular user.
                            However, everything comes at a great cost.
                        </p>
                        <div className="absolute bottom-9 flex justify-between w-[110%] z-10">
                            <a
                                href=""
                                className="text-[#a4a7ab] hover:text-white"
                            >
                                <div className="flex items-center gap-3">
                                    <div>
                                        <img
                                            src={PlayIcon}
                                            className="h-6"
                                            alt=""
                                        />
                                    </div>
                                    <div>
                                        <h2 className="font-bold">
                                            Watch First Episode
                                        </h2>
                                        <p className="text-sm">
                                            S1 E1, 20 May 2022
                                        </p>
                                    </div>
                                </div>
                            </a>

                            <div className="flex gap-9">
                                <a href="">
                                    <div className="flex flex-col items-center gap-2">
                                        <img
                                            src={PlusIcon}
                                            alt=""
                                            className="h-6"
                                        />
                                        <h2 className="text-xs uppercase">
                                            WATCHLIST
                                        </h2>
                                    </div>
                                </a>
                                <a href="">
                                    <div className="flex flex-col items-center gap-2">
                                        <img
                                            src={ShareIcon}
                                            alt=""
                                            className="h-6"
                                        />
                                        <h2 className="text-xs uppercase">
                                            SHARE
                                        </h2>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="w-[63%] relative">
                        <div className="absolute left-0 h-full w-[200px] bg-gradient-to-r from-[#030b17]"></div>
                        <img
                            src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/9473/1249473-h-b82330364ddc"
                            alt=""
                            className="w-full h-full rounded-t-md rounded-b-md"
                        />
                    </div>
                </div>
            </div>

            <Episodes id="todo"></Episodes>

            <Movies moviesTypeText="More Like This" />
        </div>
    );
};

export default Detail;
