

// Задача для этого компонента:
// Реализовать создание нового героя с введенными данными. Он должен попадать
// в общее состояние и отображаться в списке + фильтроваться
// Уникальный идентификатор персонажа можно сгенерировать через uiid
// Усложненная задача:
// Персонаж создается и в файле json при помощи метода POST
// Дополнительно:
// Элементы <option></option> желательно сформировать на базе
// данных из фильтров
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHttp} from '../../hooks/http.hook';
import {heroesAdd, heroesFetchingError} from '../../actions/index';

const HeroesAddForm = () => {
    const { request } = useHttp()
    const dispatch = useDispatch()
    const filterList = useSelector((state) => state.filters.filterList)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [element, setElement] = useState('')
    
    const handleChangeName = (e) => {
        setName(() => e.target.value)
    }
    const handleChangeDescription = (e) => {
        setDescription(() => e.target.value)
    }
    const handleChangeElement = (e) => {
        setElement(() => e.target.value)
    }
   
    const handleCreate = (e) => {
        e.preventDefault();
        const newHero = {
            id: Math.floor(Math.random() * 1000),
            name,
            description,
            element
        }
        request("http://localhost:3001/heroes", 'POST', JSON.stringify(newHero))
            .then(() => dispatch(heroesAdd(newHero)))
            .then(() => {
                setName('')
                setDescription('')
                setElement('')
            })
            .catch(() => dispatch(heroesFetchingError()))
    }
    return (
        <form className="border p-4 shadow-lg rounded">
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
                <input 
                    required
                    type="text" 
                    name="name" 
                    value={name}
                    onChange={handleChangeName}
                    className="form-control" 
                    id="name" 
                    placeholder="Как меня зовут?"/>
            </div>

            <div className="mb-3">
                <label htmlFor="text" className="form-label fs-4">Описание</label>
                <textarea
                    required
                    name="text" 
                    value={description}
                    onChange={handleChangeDescription}
                    className="form-control" 
                    id="text" 
                    placeholder="Что я умею?"
                    style={{"height": '130px'}}/>
            </div>

            <div className="mb-3">
                <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
                <select 
                    required
                    className="form-select" 
                    id="element" 
                    onChange={handleChangeElement}
                    value={element}
                    name="element">
                    <option >Я владею элементом...</option>
                    {
                        filterList.map((item) => {
                            if(item.filter === 'all') {
                                return null
                             } 
                            return <option value={item.filter}>{item.label}</option>
                        })
                    }
                </select>
            </div>

            <button onClick={handleCreate} type="submit" className="btn btn-primary">Создать</button>
        </form>
    )
}

export default HeroesAddForm;