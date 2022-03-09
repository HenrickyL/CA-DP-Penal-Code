import {action} from 'typesafe-actions'
import {UITypes,Redirect} from './types'

export const setLoading = (value:boolean)=> action(UITypes.LOADING,value)

export const setError = (value:boolean)=> action(UITypes.ERROR,value);

export const setRedirect = (value:Redirect)=> action(UITypes.REDIRECT,value);

export const clean = ()=> action(UITypes.CLEAN);


