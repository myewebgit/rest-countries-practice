import React from 'react';
import '../Country/Country.css';
const Country = (props) => {
    const {area, region, name, population,flags} = props.country
    return (
        <div className='country'>
           
            <img className='img' src={flags.png} alt="" />
            <h3>{name.common}</h3>
            <p>Poopulation:{population}</p>
            <p>Region:{region}</p>
            <p>Area:{area}</p>
        </div>
    );
};

export default Country;