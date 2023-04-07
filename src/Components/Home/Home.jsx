import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';

const Home = () => {
    const tshirts =useLoaderData();

    return (
        <div>
            <h2>This is Home File: {tshirts.length}</h2>
            {
                tshirts.map(tshirt => 
                (<Tshirt
                key={tshirt._id}
                tshirt={tshirt}
                ></Tshirt>)
                )
            }
        </div>
    );
};

export default Home;