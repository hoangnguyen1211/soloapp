import * as discussServices from '../../services/DiscussService';
import * as types from '../types/DiscussTypes';

export const getAllDiscuss = () => {
    return dispatch => {
        discussServices.getAllDiscussService()
            .then(res => {
                dispatch({
                    type: types.GET_ALL_DISCUSS,
                    payload: {
                        data: res
                    }
                })
            })
    }
}

export const getDiscussByIndex = (index) => {
    return {
        type:  types.GET_DISCUSS_BY_INDEX,
        payload: {
            index
        }
    }
}


export const postDiscussQuestion = (question) => {
    return {
        type:  types.POST_DISCUSS_QUESTION,
        payload: {
            data: question
        }
    }
}

export const postDiscussComment = (discuss) => {
    return {
        type:  types.POST_DISCUSS_COMMENT,
        payload: {
            data: discuss
        }
    }
}