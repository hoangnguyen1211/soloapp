import * as types from '../types/CategoryTypes';

const intialState = {
    categories: [],
    topics: []
}

const categoryReducer = (state = intialState, action) => {
    const { payload } = action;
    switch (action.type) {
        case types.GET_ALL_TOPIC:
            return {
                ...state,
                topics: payload.data
            }
        case types.GET_ALL_CATEGORY:
            return {
                ...state,
                categories: payload.data
            }
        default:
            return state
    }
}

export default categoryReducer;