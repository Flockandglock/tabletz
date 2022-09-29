import { useMemo } from "react";


// хук сортировки column - левый selct, type - правый, query - строка из input
export const useSorted = (elem, column, type, query) => {

    const sortedAndSearchedElem = useMemo(() => {

        if (column === 'all' || type === 'all' || query.length === 0) {

            return elem

        } else if (column === 'name' && type === 'equals' ) {

            // return elem.filter(item => item.name.indexOf(query) > -1)

            return elem.filter(item => item.name === String(query))

        } else if (column === 'name' && type === 'contains') {

            return elem.filter(item => item.name.indexOf(query) > -1)

        } else if (column === 'name' && type === 'more') {

            return elem.filter(item => query.charCodeAt() > item.name[0].charCodeAt())

        } else if (column === 'name' && type === 'less') {

            return elem.filter(item => item.name[0].charCodeAt() > query.charCodeAt())

        } else if (column === 'quantity' && type === 'equals') {

            return elem.filter(item => item.quantity === Number(query))

        } else if (column === 'quantity' && type === 'contains') {

            return elem.filter(item => String(item.quantity).indexOf(query) > -1)

        } else if (column === 'quantity' && type === 'more') {

            return elem.filter(item => Number(query) > item.quantity)

        } else if (column === 'quantity' && type === 'less') {

            return elem.filter(item => Number(query) < item.quantity)

        } else if (column === 'distance' && type === 'equals') {

            return elem.filter(item => item.distance === Number(query))

        } else if (column === 'distance' && type === 'contains') {

            return elem.filter(item => String(item.distance).indexOf(query) > -1)

        } else if (column === 'distance' && type === 'more') {

            return elem.filter(item => Number(query) > item.distance)

        } else if (column === 'distance' && type === 'less') {

            return elem.filter(item => Number(query) < item.distance)

        } else {
            return elem
        }  

    }, [ elem, query, column, type]);
   
    return sortedAndSearchedElem
    
};