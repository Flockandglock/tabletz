import React from 'react';

const ListItem = ({name, quantity, distance, date}) => {
    return (
        <li className='list-item'>
           <p>{name}</p>
            <p>{quantity}</p>
            <p>{distance}</p>
            <p>{date}</p>
        </li>
    );
};

export default ListItem;