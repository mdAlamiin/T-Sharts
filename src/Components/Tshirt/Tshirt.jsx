import React from 'react';

const Tshirt = ({tshirt}) => {
    const {picture}= tshirt
    return (
        <div>
            {/* <h1>This Tshirt page</h1> */}
            
                <img src={picture} alt="" />
            
        </div>
    );
};

export default Tshirt;