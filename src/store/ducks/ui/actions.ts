import {action} from 'typesafe-actions'
import {UITypes} from './types'

export const setLoading = (value:boolean)=> action(UITypes.LOADING,value)

export const setError = (value:boolean)=> action(UITypes.ERROR,value);
