
/**
 * Actions Types
 */
export enum PenalCodeTypes {
    LOAD_REQUEST = '@penalcode/LOAD_REQUEST',
    LOAD_SUCCES = '@penalcode/LOAD_SUCCES',
    LOAD_FAILURE = '@penalcode/LOAD_FAILURE',
}

/**
 * Data Types
 */
export interface IPenalCode{
    nome: string
    descricao:string
    dataCriacao: Date
    multa: number
    tempoPrisao: number
    status: number
}

/**
 * State Types
 */
export interface PenalCodeState{
    readonly data: IPenalCode[]
    readonly loading: boolean
    readonly error: boolean
}