import {action} from 'typesafe-actions'
import {StatusTypes,IStatus} from './types'

export const loadSucces = (value:IStatus[])=> 
     action(StatusTypes.LOAD_SUCCES,value)

export const loadFailure = ()=> action(StatusTypes.LOAD_FAILURE);

export const loadRequest = ()=> action(StatusTypes.LOAD_REQUEST);


