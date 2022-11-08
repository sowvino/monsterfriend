import React from "react";

const Card = function () {
    return (
        <div className='bg-light-blue dib br3 pa3 ma2 grow'>
            <img src="https://robohash.org/test?200x200" alt='Robot'></img>
            <div>
                <h2>Jane doe</h2>
                <p>JaneDoe@gmail.com</p>
            </div>

        </div>
    );
}

export default Card;