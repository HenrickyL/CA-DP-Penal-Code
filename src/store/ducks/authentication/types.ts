
/**
 * Actions Types
 */
export enum AuthTypes {
    LOGIN_SUCCESS = '@auth/LOGIN_SUCCESS',
    LOGIN_FAILURE = '@auth/LOGIN_FAILURE',
    LOGOUT = '@auth/LOGOUT',
}


/**
 * Data Types
 */
export interface IUser{
    id: number
    nome: string
    //sem senha para reduzir a vulnerabilidade
}

export interface IUserRequest{
    nome: string
    senha:string    
}

export interface IUserResponse{
    id: number
    nome: string
    senha:string    
}

/**
 * State Types
 */

export interface AuthState{
    readonly isLogged: boolean,
    readonly token?: string,
    readonly user: IUser | null,
}