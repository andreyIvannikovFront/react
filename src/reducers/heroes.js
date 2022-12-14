const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HEROES_FETCHING':
            return {
                ...state,
                heroesLoadingStatus: 'loading'
            }
        case 'HEROES_FETCHED':
            return {
                ...state,
                heroes: action.payload,
                heroesLoadingStatus: 'idle'
            }
        case 'HEROES_FETCHING_ERROR':
            return {
                ...state,
                heroesLoadingStatus: 'error'
            }
        case 'HEROES_ADD':
            const newHeroes = [...state.heroes, action.payload]
            return {
                ...state,
                heroes: newHeroes,
                heroesLoadingStatus: 'idle'
            }
        case 'HEROES_DELETE':
            const heroes = state.heroes.filter((item) => item.id !== action.id)
            return {
                ...state,
                heroes: heroes,
                heroesLoadingStatus: 'idle'
            }
        default: return state
    }
}

export default reducer;