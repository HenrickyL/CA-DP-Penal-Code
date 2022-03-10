import { StyPenalCode } from "./style"

import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ApplicationState } from "../../store"
import { IPenalCode } from "../../store/ducks/penalCode/types"
import * as penalCodeAction from '../../store/ducks/penalCode/actions'
import * as statusAction from '../../store/ducks/status/actions'

import api from "../../services/apiService"
import { formatPenalCode } from "../../services/dataService"
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


    const requestPenalCodes = ()=>{
        api.get('codigopenal')
        .then(res=>{
            const allPenalCodes: IPenalCode[] = res.data
            dispatch(penalCodeAction.loadSucces(allPenalCodes))
        })
        .catch(err=>{
            dispatch(penalCodeAction.loadFailure())
        })
    }

    const requestStatus = ()=>{
        api.get('status')
        .then(res=>{
            const allStatus: IStatus[] = res.data
            dispatch(statusAction.loadSucces(allStatus))
        })
        .catch(err=>{
            dispatch(statusAction.loadFailure())
        })
    }


    useEffect(()=>{
        dispatch(penalCodeAction.loadRequest())
        requestPenalCodes()
        requestStatus()
        setPenalcodes(formatPenalCode(penalCodeState.data,status))
        setstatus(statusState.data)
        setLoading(penalCodeState.loading)
        setError(penalCodeState.error)
    },[])


    useEffect(()=>{
        setPenalcodes(formatPenalCode(penalCodeState.data,status))
        setstatus(statusState.data)
        setLoading(penalCodeState.loading)
        setError(penalCodeState.error)
    },[penalCodeState,statusState])


    return(
        <StyPenalCode>
            <div>
            <DataTable values={penalCodes} headers={['Nome','Multa','Tempo de Prisão','Data','Status']}/>
            </div>
        </StyPenalCode>

    )
}

export default PenalCode