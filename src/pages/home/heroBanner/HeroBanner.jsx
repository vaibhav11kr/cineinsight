import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./style.scss";

import useFetch from "../../../hooks/useFetch";

import Img from "../../../components/lazyLoadImage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

const HeroBanner = () => {
    const [background, setBackground] = useState("");
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const { url } = useSelector((state) => state.home);
    const { data, loading } = useFetch("/movie/upcoming");

    useEffect(() => {
        const randomBackdropPath =
            data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;

        // Check if backdrop path is valid before constructing the URL
        if (url.backdrop && randomBackdropPath) {
            const bg = url.backdrop + randomBackdropPath;
            setBackground(bg);
        } else {
            // Fallback to the default image if URL is not valid
            setBackground("");
        }
    }, [data, url.backdrop]);

    const searchHandler = () => {
        if (query.length > 0) {
            navigate(`/search/${query}`);
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            searchHandler();
        }
    };

    const fallbackImage = "https://image.tmdb.org/t/p/original/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg";

    return (
        <div className="heroBanner">
            {!loading && (
                <div className="backdrop-img">
                    <Img src={background || fallbackImage} />
                </div>
            )}

            <div className="opacity-layer"></div>
            <ContentWrapper>
                <div className="heroBannerContent">
                    <span className="title">CineInsight.</span>
                    <span className="subTitle">
                        Where Every Frame Unfolds a Tale. Your Movie Odyssey Begins Here!
                    </span>
                    <div className="searchInput">
                        <input
                            type="text"
                            placeholder="Search for a movie or tv show...."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyPress={handleKeyPress}
                        />
                        <button onClick={searchHandler}>Search</button>
                    </div>
                </div>
            </ContentWrapper>
        </div>
    );
};

export default HeroBanner;
