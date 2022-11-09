import React from "react";

const SearchBox = function ({ searchChange }) {

    return (
        <div>
            <input
                className="pa3 ba b--green bg-light-green "
                type='Search' placeholder='Search Robots'
                onChange={searchChange}
            ></input>
        </div>
    )



}
export default SearchBox;
