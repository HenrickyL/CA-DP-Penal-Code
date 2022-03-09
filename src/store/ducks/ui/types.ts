
/**
 * Actions Types
 */
export enum UITypes {
    LOADING = '@ui/LOADING',
    ERROR = '@ui/ERROR',
    REDIRECT = '@ui/REDIRECT',
    CLEAN = '@ui/CLEAN',

}


/**
 * Data Types
 */


/**
 * State Types
 */
export interface Redirect{
    value: boolean
    previousUrl?:string | null
}
export interface UIState{
    readonly loading: boolean,
    readonly error: boolean,
    readonly redirect: Redirect
}