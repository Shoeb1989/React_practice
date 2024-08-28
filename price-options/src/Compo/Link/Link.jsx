import React from 'react';
import PropTypes from 'prop-types'; // ES6

const Link = ({route}) => {
    return (
        <li className='mr-10 px-6 hover:bg-yellow-200' key={route.id}>
            
            <a href={`route.path`}> {route.name} </a> 
            
        </li>
    );
};

Link.prototype = {
    route:PropTypes.object
}

export default Link;