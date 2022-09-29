import './filter.scss';


const Filter = ({filter, setFilter}) => {

    
    return (
        <div className='filter'>

            <input className='filter__input' type="text" maxLength={20} onChange={e => setFilter({...filter, query: e.target.value})} />

            <select className='filter__column' name="" id="" onChange={e => setFilter({...filter, column: e.target.value})}>
                <option value="all">без фильтра</option>
                <option value="name">название</option>
                <option value="quantity">количество</option>
                <option value="distance">расстояние</option>
            </select>

            <select className='filter__type' name="" id="" onChange={e => setFilter({...filter, type: e.target.value})}>
                <option value="all">без фильтра</option>
                <option value="equals">равно</option>
                <option value="contains">содержит</option>
                <option value="more">больше</option>
                <option value="less">меньше</option>
            </select>

        </div>
    );
};

export default Filter;