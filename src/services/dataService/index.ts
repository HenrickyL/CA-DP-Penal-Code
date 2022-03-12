import { Dispatch } from "redux";
import { IPenalCode } from "../../store/ducks/penalCode/types";
import { IStatus } from "../../store/ducks/status/types";
import api from "../apiService";
import { formatDate, formatMoney, upperFirst } from "../formatService";
import * as penalCodeAction from '../../store/ducks/penalCode/actions'
import * as statusAction from '../../store/ducks/status/actions'

    


export const formatPenalCodes = (data:IPenalCode[]   , status:IStatus[]=[]):IPenalCode[]=>{
    
    const res = data.map<IPenalCode>( p=>{
        p.nome = upperFirst(p.nome)
        if(p.dataCriacao)
            p.dataCriacao = formatDate(p.dataCriacao,'dd/MM/yyyy')
        p.descricao = upperFirst(p.descricao)
        p.multa = Number(p.multa).toFixed(2)
        if(status.length>0){
            const aux = status.find(s=>s.id===p.status)
            p.statusId= p.status
            p.status = aux? aux.descricao : '-'
        }
        return p;
    })
    return res;
}

export const formatPenalCode = (data:IPenalCode   , status:IStatus[]=[]):IPenalCode=>{
    data.nome = upperFirst(data.nome)
    data.dataCriacao = formatDate(data.dataCriacao,'dd/MM/yyyy')
    data.descricao = upperFirst(data.descricao)
    data.multa = formatMoney(data.multa)
    if(status.length>0){
        const aux = status.find(s=>s.id===data.status)
        data.status = aux? aux.descricao : '-'
    }
    return data;
}


export const requestPenalCodes = (dispatch:Dispatch)=>{
    dispatch(penalCodeAction.loadRequest())
    api.get('codigopenal')
    .then(res=>{
        const allPenalCodes: IPenalCode[] = res.data
        dispatch(penalCodeAction.loadSucces(allPenalCodes))
    })
    .catch(err=>{
        dispatch(penalCodeAction.loadFailure())
    })
}

export const requestPenalCodesById = async (id:string,dispatch:Dispatch):Promise<IPenalCode|null>=>{
    try{
        const res  =await api.get(`codigopenal/${id}`)
        const currentPenalCode: IPenalCode = res.data
        return currentPenalCode
    }catch(err){
        dispatch(penalCodeAction.loadFailure())
        return null
    }
}

export const requestStatus = (dispatch:Dispatch)=>{
    dispatch(statusAction.loadRequest())
    api.get('status')
    .then(res=>{
        const allStatus: IStatus[] = res.data
        dispatch(statusAction.loadSucces(allStatus))
    })
    .catch(err=>{
        dispatch(statusAction.loadFailure())
    })
}