import { Reducer } from 'redux';
import { PenalCodeTypes,PenalCodeState} from './types';

const INITIAL_STATE:PenalCodeState = {
    data: [],
    error: false,
    loading: false
}

const reducer: Reducer<PenalCodeState> = 
    (state=INITIAL_STATE, action)=>{
        switch (action.type) {
            case PenalCodeTypes.LOAD_SUCCES:
                return {...state,loading:false, data: action.payload};
            case PenalCodeTypes.LOAD_REQUEST:
                return {...state,loading:true};
            case PenalCodeTypes.LOAD_FAILURE:
                return {...state,loading:false,error:true};
            default:
                return INITIAL_STATE;
        }
}

export default reducer;