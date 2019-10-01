import * as types from '../types/SignUpTypes';

export const setInfoSignUp = (obj) => {
    return {
        type:  types.SET_INFO_SIGN_UP,
        payload:  obj
    }
}