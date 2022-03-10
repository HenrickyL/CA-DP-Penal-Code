import { Reducer } from 'redux';
import { StatusTypes,StatusState} from './types';

const INITIAL_STATE:StatusState = {
    data: [],
    error: false,
    loading: false
}

const reducer: Reducer<StatusState> = 
    (state=INITIAL_STATE, action)=>{
        switch (action.type) {
            case StatusTypes.LOAD_SUCCES:
                return {...state,loading:false, data: action.payload};
            case StatusTypes.LOAD_REQUEST:
                return {...state,loading:true};
            case StatusTypes.LOAD_FAILURE:
                return {...state,loading:false,error:true};
            default:
                return INITIAL_STATE;
        }
}

export default reducer;