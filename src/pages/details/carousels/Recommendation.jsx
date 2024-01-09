import React from "react";

import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";

const Recommendation = ({ mediaType, id }) => {
    const { data, loading, error } = useFetch(
        `/${mediaType}/${id}/recommendations`
    );

    return (
        <>
            {data?.results && data.results.length > 0 ? (
                <Carousel
                    title="Recommendations"
                    data={data?.results}
                    loading={loading}
                    endpoint={mediaType}
                />
            ) : null}
        </>
    );
};

export default Recommendation;
