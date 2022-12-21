import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
    return (
        <div>
            <Slider {...settings}>
                <div>
                    <div className="flex justify-between w-[95%] mx-auto bg-[#030b17] rounded-md h-[400px]">
                        <div className="w-[37%] h-full py-12 px-10 text-white">
                            <h1 className="font-bold text-3xl">Escaype Live</h1>
                            <h3 className="text-base my-2 text-[#ffffff99]">
                                Thriller, Hindi, Hostar Specials
                            </h3>
                            <p className="text-base text-[#ffffffcc] leading-7">
                                A live-streaming app announces a contest,
                                promising instant fame and fortune to its most
                                popular user. However, everything comes at a
                                great cost.
                            </p>
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
                <div>
                    <div className="flex justify-between w-[95%] mx-auto bg-[#030b17] rounded-md h-[400px]">
                        <div className="w-[37%] h-full py-12 px-10 text-white">
                            <h1 className="font-bold text-3xl">Escaype Live</h1>
                            <h3 className="text-base my-2 text-[#ffffff99]">
                                Thriller, Hindi, Hostar Specials
                            </h3>
                            <p className="text-base text-[#ffffffcc] leading-7">
                                A live-streaming app announces a contest,
                                promising instant fame and fortune to its most
                                popular user. However, everything comes at a
                                great cost.
                            </p>
                        </div>
                        <div className="w-[63%] relative">
                            <div className="absolute left-0 h-full w-[200px] bg-gradient-to-r from-[#030b17]"></div>
                            <img
                                src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/8773/1028773-h-48170a73363e"
                                alt=""
                                className="w-full h-full rounded-t-md rounded-b-md"
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between w-[95%] mx-auto bg-[#030b17] rounded-md h-[400px]">
                        <div className="w-[37%] h-full py-12 px-10 text-white">
                            <h1 className="font-bold text-3xl">Escaype Live</h1>
                            <h3 className="text-base my-2 text-[#ffffff99]">
                                Thriller, Hindi, Hostar Specials
                            </h3>
                            <p className="text-base text-[#ffffffcc] leading-7">
                                A live-streaming app announces a contest,
                                promising instant fame and fortune to its most
                                popular user. However, everything comes at a
                                great cost.
                            </p>
                        </div>
                        <div className="w-[63%] relative">
                            <div className="absolute left-0 h-full w-[200px] bg-gradient-to-r from-[#030b17]"></div>
                            <img
                                src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5210/1165210-h-a72a0a95461e"
                                alt=""
                                className="w-full h-full rounded-t-md rounded-b-md"
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between w-[95%] mx-auto bg-[#030b17] rounded-md h-[400px]">
                        <div className="w-[37%] h-full py-12 px-10 text-white">
                            <h1 className="font-bold text-3xl">Escaype Live</h1>
                            <h3 className="text-base my-2 text-[#ffffff99]">
                                Thriller, Hindi, Hostar Specials
                            </h3>
                            <p className="text-base text-[#ffffffcc] leading-7">
                                A live-streaming app announces a contest,
                                promising instant fame and fortune to its most
                                popular user. However, everything comes at a
                                great cost.
                            </p>
                        </div>
                        <div className="w-[63%] relative">
                            <div className="absolute left-0 h-full w-[200px] bg-gradient-to-r from-[#030b17]"></div>
                            <img
                                src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/2732/1122732-h-e1113b315b96"
                                alt=""
                                className="w-full h-full rounded-t-md rounded-b-md"
                            />
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default ImageSlider;
