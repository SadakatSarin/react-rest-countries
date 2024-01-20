import React from 'react';

import './Country.css'


const Country = (props) => {

    console.log(props.country);
    const { area,capital,name } = props.country;

   
   

    return (
        <div className='country'>

            <h2>Country Name:{name.common}</h2>
            
            <h4>Capital:{capital}</h4>

            <p><small>Area:{ area}</small></p>


        </div>
    );
};

export default Country;