import * as types from '../types/LessonTypes';

const intialState = {
    lessons: [],
    totalQuestion: 0
}

const lessonReducer = (state = intialState, action) => {
    const { payload } = action;
    switch (action.type) {
        case types.GET_ALL_LESSON_BY_COURSE:
            return { 
                ...state,
                lessons: payload.data,
                totalQuestion: payload.totalQuestion
            }
        default:
            return state
    }
}

export default lessonReducer;