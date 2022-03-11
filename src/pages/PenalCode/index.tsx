import { StyPenalCode } from "./style"

import { useEffect, useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ApplicationState } from "../../store"
import { IPenalCode } from "../../store/ducks/penalCode/types"
import * as penalCodeAction from '../../store/ducks/penalCode/actions'

import {  formatPenalCodes, requestPenalCodes, requestStatus } from "../../services/dataService"
import { IStatus } from "../../store/ducks/status/types"
import DataTable from "../../components/DataTable"


const PenalCode = ()=>{
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<boolean>(false)

    const [penalCodes, setPenalcodes] = useState<IPenalCode[]>([])
    const [status, setstatus] = useState<IStatus[]>([])


    const dispatch = useDispatch()
    const penalCodeState = useSelector((state:ApplicationState) => state.penalCode);
    const statusState = useSelector((state:ApplicationState) => state.status);


    


    useEffect(()=>{
        dispatch(penalCodeAction.loadRequest())
        requestStatus(dispatch)
        requestPenalCodes(dispatch)
    },[])


    useEffect(()=>{
        setstatus(statusState.data)
        setPenalcodes(formatPenalCodes(penalCodeState.data,status))
        setLoading(penalCodeState.loading)
        setError(penalCodeState.error)
    },[penalCodeState,statusState])

const TableMemo = useMemo(()=>        
    <DataTable values={penalCodes} formater={formatPenalCodes} headers={['Nome','Multa','Tempo de Prisão','Criação','Status']}/>,[penalCodes]
)
    return(
        <StyPenalCode>
            <div>
            {TableMemo}
            </div>
        </StyPenalCode>

    )
}

export default PenalCode