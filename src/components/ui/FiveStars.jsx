import React from 'react';
import StarIcon from "../../assets/images/icon-star.svg";

const FiveStars = () => {
    return (
        <div className={"flex"}>
            {Array.from({length: 5}).map((star, index) =>
                <div key={index} className={"flex justify-center items-center"}>
                    <img src={StarIcon} alt={"star-icon"} />
                </div>)}</div>

    );
};

export default FiveStars;