import {action} from 'typesafe-actions'
import {User,AuthTypes} from './types'


export const login = (data:User)=> action(AuthTypes.LOGIN,data);

export const logout = ()=> action(AuthTypes.LOGOUT);