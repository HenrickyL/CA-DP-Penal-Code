import {action} from 'typesafe-actions'
import {Repository,RepositoriesTypes} from './types'

export const laodRequest = ()=> action(RepositoriesTypes.LOAD_REQUEST);

export const laodSuccess = (data:Repository[])=> action(RepositoriesTypes.LOAD_SUCCESS,data);

export const laodFailure = ()=> action(RepositoriesTypes.LOAD_FAILURE);