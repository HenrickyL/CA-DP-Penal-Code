import { Reducer } from 'redux';
import { UIState,UITypes} from './types';

const INITIAL_STATE:UIState = {
    data: [],
    error:false,
    loading:false
}

const reducer: Reducer<UIState> = 
    (state=INITIAL_STATE, action)=>{
        switch (action.type) {
            case UITypes.LOADING:
                return {...state,loading:action.payload};
            case UITypes.ERROR:
                return {...state,loading:false, error:false, data: action.payload};
            default:
                return state;
        }
}

export default reducer;