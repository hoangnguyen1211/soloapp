import * as lessonServices from '../../services/LessonService';
import * as userInfoServices from '../../services/UserInfoService';
import * as types from '../types/LessonTypes';

export const getAllLessonByCourse = (courseId) => {
    userInfoServices.setUserInfoCurrentCourseId(courseId);
    return dispatch => {
        lessonServices.getAllLessonByCourseService(courseId)
            .then(res => {
                let totalQuestion = 0;
                for(let item of res) {
                    totalQuestion += parseInt(item.numberQuestion);
                }
                dispatch({
                    type: types.GET_ALL_LESSON_BY_COURSE,
                    payload: {
                        data: res,
                        totalQuestion
                    }
                })
            })
    }
}