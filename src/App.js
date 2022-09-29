import { useState, useEffect, useCallback } from 'react';
import Table from './components/table/Table';
import Filter from './components/filter/Filter';
import Pagination from './components/pagination/Pagination';
import { ElemsContext } from './context';

import { useFetching } from './hooks/useFetching';
import { useSorted } from './hooks/useSorted';
import { getAllEelement } from './API/service';
import { getPageCount } from './utils/pages';

import './App.css';



function App() {

    const [elem, setElem] = useState([]);
    const [filter, setFilter] = useState({ column: 'all', type: 'all', query: '' });
    const [totalPage, setTotalPage] = useState(0);
    const [limit, setLimit] = useState(5);
    const [page, setPage] = useState(1);

    // делаем запрос по лимиту и номеру странице
    const [fetchElem, isLoading] = useFetching(async () => {
        const response = await getAllEelement(limit, page);
        setElem(response.data);

        const totalCount = response.headers['x-total-count'];
        setTotalPage(getPageCount(totalCount, limit));
    });

    const sortedElements = useSorted(elem, filter.column, filter.type, filter.query);


    useEffect(() => {
        fetchElem()
    }, [page])

    const changePage = (page) => {
        setPage(page);
    };


    return (
        <ElemsContext.Provider value={{ isLoading, sortedElements }}>
            <div className="App">
                <Filter filter={filter} setFilter={setFilter} />
                <Table />
                <Pagination page={page} changePage={changePage} totalPage={totalPage} />
            </div>
        </ElemsContext.Provider>
    );
}

export default App;
