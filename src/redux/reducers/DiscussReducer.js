import * as types from '../types/DiscussTypes';

const intialState = {
    currentIndex: 0,
    totalDiscuss: 0,
    discusses: [],
    discuss: {}
}

const discussReducer = (state = intialState, action) => {
    const { payload } = action;
    switch (action.type) {
        case types.GET_ALL_DISCUSS:
            return {
                ...state,
                currentIndex: 0,
                discusses: payload.data,
                totalDiscuss: payload.data.length
            }
        case types.GET_DISCUSS_BY_INDEX:
            return {
                ...state,
                currentIndex: payload.index,
                discuss: state.discusses[payload.index]
            }
        case types.POST_DISCUSS_QUESTION:
            return {
                ...state,
                discusses: [...state.discusses, payload.data],
                totalDiscuss: state.totalDiscuss + 1
            }
        case types.POST_DISCUSS_COMMENT:
            const { data } = payload;
            return {
                ...state,
                discuss: {...state.discuss, comments: [...data.comments ]}
            }
        default:
            return state
    }
}

export default discussReducer;