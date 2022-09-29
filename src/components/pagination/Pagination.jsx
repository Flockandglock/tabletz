import {  getPageArray } from '../../utils/pages';

import './pagination.scss';



const Pagination = ({totalPage, page, changePage}) => {

    let pageArray = getPageArray(totalPage);

    return(
        <div className='page__wrapper'>
            {
                pageArray.map(p => {
                    return <div 
                            onClick={() => changePage(p)}   
                            key={p} 
                            className={page === p ? 'page page__current' : 'page'}>
                                {p}
                            </div>
                })
            }
        </div>
    )
};

export default Pagination;