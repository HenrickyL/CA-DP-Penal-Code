import {action} from 'typesafe-actions'
import {PenalCodeTypes,IPenalCode} from './types'

export const loadSucces = (value:IPenalCode[])=> 
     action(PenalCodeTypes.LOAD_SUCCES,value)

export const loadFailure = ()=> action(PenalCodeTypes.LOAD_FAILURE);

export const loadRequest = ()=> action(PenalCodeTypes.LOAD_REQUEST);


