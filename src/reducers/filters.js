const initialState = {
    activeFilter: 'all',
    filterList: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_ACTIVE_FILTER':
            return {
                ...state,
                activeFilter: action.payload,
            }
        case 'FILTERS_FETCH':
            return {
                ...state,
                filterList: action.payload,
        }
        default: return state
    }
}

export default reducer;