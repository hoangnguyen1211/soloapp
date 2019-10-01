import * as questionServices from '../../services/QuestionService';
import * as userInfoServices from '../../services/UserInfoService';
import * as types from '../types/QuestionTypes';

export const getAllQuestionByLesson = (lessonId, title) => {
    userInfoServices.setUserInfoCurrentLessonId(lessonId);
    return dispatch => {
        questionServices.getAllQuestionByLessonService(lessonId)
            .then(res => {
                dispatch({
                    type: types.GET_ALL_QUESTION_BY_LESSON,
                    payload: {
                        data: res,
                        title
                    }
                })
            })
    }
}

export const getNextQuestion = () => {
    const currentIndex = userInfoServices.getUserInfoCurrentQuestionIndex();
    userInfoServices.setUserInfoCurrentQuestionIndex(currentIndex + 1);
    return {
        type: types.GET_QUESTION_BY_INDEX,
        payload: {
            index: currentIndex + 1
        }
    }
}

export const getQuizRelate = () => {
    return {
        type: types.GET_QUIZ_RELATE
    }
}

export const getFirtQuestion = () => {
    return {
        type: types.GET_QUESTION_BY_INDEX,
        payload: {
            index: 0
        }
    }
}