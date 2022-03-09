import { Reducer } from 'redux';
import { UIState,UITypes} from './types';

const INITIAL_STATE:UIState = {
    error:false,
    loading:false,
    redirect:{
        value:false
    }
}

const reducer: Reducer<UIState> = 
    (state=INITIAL_STATE, action)=>{
        switch (action.type) {
            case UITypes.LOADING:
                return {...state,loading:action.payload};
            case UITypes.ERROR:
                return {...state,loading:false, error: action.payload};
            case UITypes.REDIRECT:
                return {...state,loading:false,error:false, redirect: action.payload};
            case UITypes.CLEAN:
                    return INITIAL_STATE;
            default:
                return state;
        }
}

export default reducer;