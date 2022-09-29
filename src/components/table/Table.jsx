import {useContext, useEffect, useState} from 'react';
import ListItem from '../listItem/ListItem';

import {ElemsContext} from '../../context';


import './table.scss';



const Table = () => {

    const {sortedElements, isLoading} = useContext(ElemsContext);

    const renderItem = (arr) => {
        if (arr.length === 0) {
            return <p>Элементы не найдены</p>
        }

        return arr.map(({id,...props} )=> 
              <ListItem key={id} {...props} />  
        )
    };

    const element = renderItem(sortedElements);


    return (
        <div className="table">
            <div className="table__wrapper">
                <div className="table__head">
                    <p className="name">Название</p>
                    <p className="material">Количество</p>
                    <p className="size">Расстояние</p>
                    <p className="price">Дата</p>
                </div>
                <ul className="table__ul">
                    {
                        isLoading ? 
                        <div>Загрузка...</div>
                        : element
                    }
                </ul>
            </div>
        </div>
    );
};

export default Table;