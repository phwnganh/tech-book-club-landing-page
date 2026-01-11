import React from "react";

const CustomButton = ({classname, children}) => {
    return (
        <button className={`border-2 flex justify-center items-center gap-4 py-250 sm:py-300 ${classname}`}>
            {children}
        </button>
    );
};

export default CustomButton;