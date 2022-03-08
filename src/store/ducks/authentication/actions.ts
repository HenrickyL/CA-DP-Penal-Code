import {action} from 'typesafe-actions'
import { setLogout } from '../../../services/authService';
import {IUser,AuthTypes} from './types'


export const loginSuccess = (value:boolean,data?:IUser|null,token?:string|null)=> {
    return action(AuthTypes.LOGIN_SUCCESS,{value,data,token})
}
export const loginFailure = ()=> action(AuthTypes.LOGIN_FAILURE);
export const logout = ()=> {
    setLogout()
    return action(AuthTypes.LOGOUT);
}