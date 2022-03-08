
/**
 * Actions Types
 */
export enum UITypes {
    LOADING = '@repositories/LOADING',
    ERROR = '@repositories/ERROR',
}


/**
 * Data Types
 */
export interface UI{

}

/**
 * State Types
 */

export interface UIState{
    readonly data: UI,
    readonly loading: boolean,
    readonly error: boolean
}