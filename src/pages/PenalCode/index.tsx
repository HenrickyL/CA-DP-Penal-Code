import { StyPenalCode } from "./style"

import { useEffect, useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ApplicationState } from "../../store"
import { IPenalCode } from "../../store/ducks/penalCode/types"
import * as penalCodeAction from '../../store/ducks/penalCode/actions'

import {  formatPenalCodes, requestPenalCodes, requestStatus } from "../../services/dataService"
import { IStatus } from "../../store/ducks/status/types"
import DataTable from "../../components/DataTable"
import {GrAdd as Add} from 'react-icons/gr'
import { useNavigate } from "react-router-dom"
import { Button } from "@chakra-ui/react"

const PenalCode = ()=>{
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<boolean>(false)

    const [penalCodes, setPenalcodes] = useState<IPenalCode[]>([])
    const [status, setstatus] = useState<IStatus[]>([])

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const penalCodeState = useSelector((state:ApplicationState) => state.penalCode);
    const statusState = useSelector((state:ApplicationState) => state.status);


    useEffect(()=>{
        console.clear()
        if(status.length===0)
            requestStatus(dispatch)
        setstatus(statusState.data)
        if(penalCodes.length===0) 
            requestPenalCodes(dispatch)
    },[])


    useEffect(()=>{
        console.log('>>',penalCodeState,statusState)
        setstatus(statusState.data)
        setPenalcodes(formatPenalCodes(penalCodeState.data,status))
        setLoading(penalCodeState.loading)
        setError(penalCodeState.error)
    },[penalCodeState,statusState])

    const handleAdd = ()=>{
        navigate(`add`);
    }
    
const TableMemo = useMemo(()=>        
    <DataTable values={penalCodes} 
        loading={loading}
        headers={['Nome','Multa(R$)','Tempo de Prisão(Dias)','Criação','Status']}/>,[penalCodes])
    return(
        <StyPenalCode>
            {TableMemo}
            <Button className="bt-add" onClick={handleAdd}>Adicionar</Button>
        </StyPenalCode>

    )
}



export default PenalCode