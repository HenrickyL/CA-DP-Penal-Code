
/**
 * Actions Types
 */
export enum AuthTypes {
    LOGIN = '@auth/LOGIN',
    LOGOUT = '@auth/LOGOUT',
}


/**
 * Data Types
 */
export interface User{
    id: number,
    nome: string
    //sem senha para reduzir a vulnerabilidade
}

/**
 * State Types
 */

export interface AuthState{
    readonly isLogged: boolean,
    readonly token?: string,
    readonly user: User | null,
}