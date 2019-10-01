import * as types from '../types/DiscussTypes';

const intialState = {
    totalDiscuss: 0,
    discusses: []
}

const discussReducer = (state = intialState, action) => {
    const { payload } = action;
    switch (action.type) {
        case types.GET_ALL_DISCUSS:
            return { 
                ...state,
                discusses: payload.data,
                totalDiscuss: payload.data.length
            }
        default:
            return state
    }
}

export default discussReducer;