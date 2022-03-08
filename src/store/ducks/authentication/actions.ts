import {action} from 'typesafe-actions'
import {IUser,AuthTypes} from './types'


export const loginSuccess = (data:IUser[])=> action(AuthTypes.LOGIN_SUCCESS,data);
export const loginFailure = ()=> action(AuthTypes.LOGIN_FAILURE);
export const logout = ()=> action(AuthTypes.LOGOUT);