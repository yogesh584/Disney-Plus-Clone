import React from "react";
import Movie from "./Movie";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/Movies.css";

const Movies = (props) => {
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
        slidesToShow: 8,
        slidesToScroll: 8,
        prevArrow: <SamplePrevArrow />,
    };
    return (
        <div className="w-[95%] mx-auto my-8">
            <h2 className="text-white text-xl my-4">{props.moviesTypeText}</h2>
            <Slider {...settings}>
                <Movie
                    name="Escaype Live"
                    tags="Thriller, Drama, Hoststar Specials"
                    smallDesc="A live-streaming app announces a contest,
                                promising instant fame and fortune to its most
                                popular use ..."
                    thumnail="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/484/1250484-v-35c6f7390b3d"
                />
                <Movie
                    name="Escaype Live"
                    tags="Thriller, Drama, Hoststar Specials"
                    smallDesc="A live-streaming app announces a contest,
                                promising instant fame and fortune to its most
                                popular use ..."
                    thumnail="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1903/1231903-v-4cbff0394620"
                />
                <Movie
                    name="Escaype Live"
                    tags="Thriller, Drama, Hoststar Specials"
                    smallDesc="A live-streaming app announces a contest,
                                promising instant fame and fortune to its most
                                popular use ..."
                    thumnail="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6011/1236011-v-b900d7045471"
                />
                <Movie
                    name="Escaype Live"
                    tags="Thriller, Drama, Hoststar Specials"
                    smallDesc="A live-streaming app announces a contest,
                                promising instant fame and fortune to its most
                                popular use ..."
                    thumnail="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5211/1165211-v-7ac0f6d12a5d"
                />
                <Movie
                    name="Escaype Live"
                    tags="Thriller, Drama, Hoststar Specials"
                    smallDesc="A live-streaming app announces a contest,
                                promising instant fame and fortune to its most
                                popular use ..."
                    thumnail="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3825/1163825-v-425dd8e7501a"
                />
                <Movie
                    name="Escaype Live"
                    tags="Thriller, Drama, Hoststar Specials"
                    smallDesc="A live-streaming app announces a contest,
                                promising instant fame and fortune to its most
                                popular use ..."
                    thumnail="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5658/1175658-v-c61b83f58fb8"
                />
                <Movie
                    name="Escaype Live"
                    tags="Thriller, Drama, Hoststar Specials"
                    smallDesc="A live-streaming app announces a contest,
                                promising instant fame and fortune to its most
                                popular use ..."
                    thumnail="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/608/1160608-v-8680160dd6b2"
                />
                <Movie
                    name="Escaype Live"
                    tags="Thriller, Drama, Hoststar Specials"
                    smallDesc="A live-streaming app announces a contest,
                                promising instant fame and fortune to its most
                                popular use ..."
                    thumnail="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8812/1148812-v-93639980824a"
                />
                <Movie
                    name="Escaype Live"
                    tags="Thriller, Drama, Hoststar Specials"
                    smallDesc="A live-streaming app announces a contest,
                                promising instant fame and fortune to its most
                                popular use ..."
                    thumnail="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1608/1161608-v-8fdb21cf9c1c"
                />
                <Movie
                    name="Escaype Live"
                    tags="Thriller, Drama, Hoststar Specials"
                    smallDesc="A live-streaming app announces a contest,
                                promising instant fame and fortune to its most
                                popular use ..."
                    thumnail="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2733/1122733-v-5df3bdae2d7a"
                />
                <Movie
                    name="Escaype Live"
                    tags="Thriller, Drama, Hoststar Specials"
                    smallDesc="A live-streaming app announces a contest,
                                promising instant fame and fortune to its most
                                popular use ..."
                    thumnail="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7519/1097519-v-7235f9a4b235"
                />
                <Movie
                    name="Escaype Live"
                    tags="Thriller, Drama, Hoststar Specials"
                    smallDesc="A live-streaming app announces a contest,
                                promising instant fame and fortune to its most
                                popular use ..."
                    thumnail="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6828/556828-v"
                />
                <Movie
                    name="Escaype Live"
                    tags="Thriller, Drama, Hoststar Specials"
                    smallDesc="A live-streaming app announces a contest,
                                promising instant fame and fortune to its most
                                popular use ..."
                    thumnail="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8105/1118105-v-cf275eb3c3f2"
                />
                <Movie
                    name="Escaype Live"
                    tags="Thriller, Drama, Hoststar Specials"
                    smallDesc="A live-streaming app announces a contest,
                                promising instant fame and fortune to its most
                                popular use ..."
                    thumnail="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5002/705002-v"
                />
                <Movie
                    name="Escaype Live"
                    tags="Thriller, Drama, Hoststar Specials"
                    smallDesc="A live-streaming app announces a contest,
                                promising instant fame and fortune to its most
                                popular use ..."
                    thumnail="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4971/674971-v"
                />
            </Slider>
        </div>
    );
};

export default Movies;
