import React from 'react';

const Country = (props) => {
    return (
        <div>
            <h2>Country Name:{props.name}</h2>
            
            <h4>Capital:{props.capital}</h4>
        </div>
    );
};

export default Country;