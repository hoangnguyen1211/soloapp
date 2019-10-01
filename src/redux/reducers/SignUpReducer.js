import * as types from '../types/SignUpTypes';

const intialState = {
    info: {}
}

const signUpReducer = (state = intialState, action) => {
    switch (action.type) {
        case types.SET_INFO_SIGN_UP:
            const { payload } = action;
            console.log({ ...state, info: payload });
            
            return { ...state, info: payload }
        default:
            return state
    }
}

export default signUpReducer;