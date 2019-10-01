import * as courseServices from '../../services/CourseService';
import * as userInfoServices from '../../services/UserInfoService';
import * as types from '../types/CourseTypes';

export const getAllCourseByTopic = (topicId) => {
    userInfoServices.setUserInfoCurrentTopicId(topicId);
    return dispatch => {
        courseServices.getAllCourseByTopicService(topicId)
            .then(res => {
                dispatch({
                    type: types.GET_ALL_COURSE_BY_TOPOIC,
                    payload: {
                        data: res
                    }
                })
            })
    }
}