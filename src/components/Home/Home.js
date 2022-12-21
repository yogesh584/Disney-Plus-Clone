import React from "react";
import ImageSlider from "./ImageSlider";
import Movies from "./Movies";

const Home = () => {
    return (
        <div>
            <ImageSlider />
            <Movies moviesTypeText="Latest & Trending" />
            <Movies moviesTypeText="Popular Shows" />
            <Movies moviesTypeText="Movies Recommended For You" />
        </div>
    );
};

export default Home;
