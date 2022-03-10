import { IPenalCode } from "../../store/ducks/penalCode/types";
import { IStatus } from "../../store/ducks/status/types";
import { formatDate, formatMoney, upperFirst } from "../formatService";

    


export const formatPenalCode = (data:IPenalCode[], status:IStatus[]=[]):IPenalCode[]=>{
    const res = data.map<IPenalCode>( p=>{
        p.nome = upperFirst(p.nome)
        p.dataCriacao = formatDate(p.dataCriacao,'dd/MM/yyyy')
        p.descricao = upperFirst(p.descricao)
        p.multa = formatMoney(p.multa)
        if(status.length>0){
            const aux = status.find(s=>s.id===p.status)
            p.status = aux? aux.descricao : '-'
        }
        return p;
    })
    return res;
}
