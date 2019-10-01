import * as types from '../types/CourseTypes';

const intialState = {
    courses: []
}

const courseReducer = (state = intialState, action) => {
    const { payload } = action;
    switch (action.type) {
        case types.GET_ALL_COURSE_BY_TOPOIC:
            return { 
                ...state,
                courses: payload.data 
            }
        default:
            return state
    }
}

export default courseReducer;