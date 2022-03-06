import { Reducer } from 'redux';
import { AuthState, AuthTypes } from './types';

const INITIAL_STATE:AuthState = {
    isLogged: false,
    user: null,
}

const reducer: Reducer<AuthState> = 
    (state=INITIAL_STATE, action)=>{
        switch (action.type) {
            case AuthTypes.LOGIN:
                return {...state,isLogged:true, user:action.payload.data};
            case AuthTypes.LOGOUT:
                return INITIAL_STATE;

            default:
                return state;
        }
}

export default reducer;