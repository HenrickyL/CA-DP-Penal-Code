
/**
 * Actions Types
 */
export enum StatusTypes {
    LOAD_REQUEST = '@status/LOAD_REQUEST',
    LOAD_SUCCES = '@status/LOAD_SUCCES',
    LOAD_FAILURE = '@status/LOAD_FAILURE',
}

/**
 * Data Types
 */
export interface IStatus{
    id: string
    descricao: string
}

/**
 * State Types
 */
export interface StatusState{
    readonly data: IStatus[]
    readonly loading: boolean
    readonly error: boolean
}