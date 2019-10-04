import * as categoryServices from '../../services/CategoryService';
import * as types from '../types/CategoryTypes';

export const getAllCategory = () => {
    return dispatch => {
        categoryServices.getAllTopicService()
            .then(res => {
                dispatch({
                    type: types.GET_ALL_TOPIC,
                    payload: {
                        data: res
                    }
                })
            })
            .then(() => {
                categoryServices.getAllCategoryService()
                .then(response => {
                    dispatch({
                        type: types.GET_ALL_CATEGORY,
                        payload: {
                            data: response
                        }
                    })
                })
            })
    }
}