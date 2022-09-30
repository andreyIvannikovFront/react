export const heroesFetching = () => {
    return {
        type: 'HEROES_FETCHING'
    }
}

export const heroesFetched = (heroes) => {
    return {
        type: 'HEROES_FETCHED',
        payload: heroes
    }
}

export const heroesFetchingError = () => {
    return {
        type: 'HEROES_FETCHING_ERROR'
    }
}

export const heroesDelete = (id) => {
    return {
        type: 'HEROES_DELETE',
        id: id
    }
}

export const heroesAdd = (payload) => {
    return {
        type: 'HEROES_ADD',
        payload: payload
    }
}

export const changeActiveFilter = (payload) => {
    return {
        type: 'CHANGE_ACTIVE_FILTER',
        payload: payload
    }
}

export const filtersFetch = (payload) => {
    return {
        type: 'FILTERS_FETCH',
        payload: payload
    }
}