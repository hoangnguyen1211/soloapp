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