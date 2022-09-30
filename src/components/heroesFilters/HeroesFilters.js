
// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useHttp} from '../../hooks/http.hook';
import {changeActiveFilter, filtersFetch, heroesFetchingError } from '../../actions/index';

const HeroesFilters = () => {
    const {request} = useHttp();
    const dispatch = useDispatch()
    const filters = useSelector((state) => state.filters.filterList)

    useEffect(() => {
        request("http://localhost:3001/filters")
            .then((res) => dispatch(filtersFetch(res)))
            .catch(() => dispatch(heroesFetchingError()))
    }, [])

        // (res) => dispatch(filtersFetch(res))
        // .catch(() => dispatch(heroesFetchingError())) 

    const handleClickFilter = (elem) => {
        dispatch(changeActiveFilter(elem))
    }

    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Отфильтруйте героев по элементам</p>
                <div className="btn-group">
                    { filters.map((btn) => 
                        <button 
                            key={btn.filter}
                            className="btn btn-outline-dark active"
                            onClick={() => handleClickFilter(btn.filter)}
                        >
                            {btn.label}
                        </button>
                    )}
                    {/* <button className="btn btn-outline-dark active">Все</button>
                    <button className="btn btn-danger">Огонь</button>
                    <button className="btn btn-primary">Вода</button>
                    <button className="btn btn-success">Ветер</button>
                    <button className="btn btn-secondary">Земля</button> */}
                </div>
            </div>
        </div>
    )
}

export default HeroesFilters;