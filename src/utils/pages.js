

// считаем общее количество страниц
export const getPageCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit)
};

// возвращаем массив с общим количеством страниц
export const getPageArray = (totalPage) => {
    let result = [];
    for (let i = 0; i < totalPage; i++) {
        result.push(i + 1);
    }
    return result
}

