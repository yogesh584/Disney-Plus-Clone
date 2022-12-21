import React from "react";
import Episode from "./Episode";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Home/css/Movies.css";

const Episodes = () => {
    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    zIndex: "111",
                }}
                onClick={onClick}
            />
        );
    }

    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 6,
        prevArrow: <SamplePrevArrow />,
    };
    return (
        <div className="w-[95%] mx-auto my-8">
            <h2 className="text-white text-xl my-4">Episodes</h2>
            <Slider {...settings}>
                <Episode
                    name="Escaype Live"
                    smallDesc="A live-streaming app announces a contest,
                                promising instant fame and fortune to its most
                                popular use ..."
                    thumnail="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/8074/1248074-h-eb6a568ed18e"
                />
                <Episode
                    name="Escaype Live"
                    smallDesc="A live-streaming app announces a contest,
                                promising instant fame and fortune to its most
                                popular use ..."
                    thumnail="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/9327/1249327-h-7817440e360a"
                />
                <Episode
                    name="Escaype Live"
                    smallDesc="A live-streaming app announces a contest,
                                promising instant fame and fortune to its most
                                popular use ..."
                    thumnail="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/9319/1249319-h-0e644aa73c86"
                />
                <Episode
                    name="Escaype Live"
                    smallDesc="A live-streaming app announces a contest,
                                promising instant fame and fortune to its most
                                popular use ..."
                    thumnail="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/8081/1248081-h-7ab64ce828f9"
                />
                <Episode
                    name="Escaype Live"
                    smallDesc="A live-streaming app announces a contest,
                                promising instant fame and fortune to its most
                                popular use ..."
                    thumnail="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/4213/1174213-h-20df94b44389"
                />
                <Episode
                    name="Escaype Live"
                    smallDesc="A live-streaming app announces a contest,
                                promising instant fame and fortune to its most
                                popular use ..."
                    thumnail="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/8982/1248982-h-942ace6f1fe1"
                />
                <Episode
                    name="Escaype Live"
                    smallDesc="A live-streaming app announces a contest,
                                promising instant fame and fortune to its most
                                popular use ..."
                    thumnail="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/8988/1248988-h-72c547e0dcb1"
                />
                <Episode
                    name="Escaype Live"
                    smallDesc="A live-streaming app announces a contest,
                                promising instant fame and fortune to its most
                                popular use ..."
                    thumnail="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8812/1148812-v-93639980824a"
                />
                <Episode
                    name="Escaype Live"
                    smallDesc="A live-streaming app announces a contest,
                                promising instant fame and fortune to its most
                                popular use ..."
                    thumnail="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/8975/1248975-h-adcec78fe9eb"
                />
                <Episode
                    name="Escaype Live"
                    smallDesc="A live-streaming app announces a contest,
                                promising instant fame and fortune to its most
                                popular use ..."
                    thumnail="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/8074/1248074-h-eb6a568ed18e"
                />
                <Episode
                    name="Escaype Live"
                    smallDesc="A live-streaming app announces a contest,
                                promising instant fame and fortune to its most
                                popular use ..."
                    thumnail="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/9327/1249327-h-7817440e360a"
                />
                <Episode
                    name="Escaype Live"
                    smallDesc="A live-streaming app announces a contest,
                                promising instant fame and fortune to its most
                                popular use ..."
                    thumnail="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/8983/1248983-h-54b232638f49"
                />
                <Episode
                    name="Escaype Live"
                    smallDesc="A live-streaming app announces a contest,
                                promising instant fame and fortune to its most
                                popular use ..."
                    thumnail="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/8975/1248975-h-adcec78fe9eb"
                />
                <Episode
                    name="Escaype Live"
                    smallDesc="A live-streaming app announces a contest,
                                promising instant fame and fortune to its most
                                popular use ..."
                    thumnail="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5002/705002-v"
                />
                <Episode
                    name="Escaype Live"
                    smallDesc="A live-streaming app announces a contest,
                                promising instant fame and fortune to its most
                                popular use ..."
                    thumnail="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4971/674971-v"
                />
            </Slider>
        </div>
    );
};

export default Episodes;
