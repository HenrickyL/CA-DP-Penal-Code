import { Button, Divider, Input, Select, Textarea } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import api from "../../services/apiService";
import { formatPenalCode, requestStatus } from "../../services/dataService";
import { ApplicationState } from "../../store";
import { IPenalCode } from "../../store/ducks/penalCode/types";
import { IStatus } from "../../store/ducks/status/types";
import { StyForm } from "../PenalCodeDetails/style";
import * as actionsPenalCodes from '../../store/ducks/penalCode/actions'
import { useNavigate } from "react-router-dom";


const initialValue:IPenalCode = {
    id:'',
    nome:'',
    descricao:'',
    dataCriacao:'',
    multa:'',
    status:'',
    statusId:'',
    tempoPrisao:''
}
const AddPenalCode = ()=>{
    const dispatch = useDispatch()
    const penalCodeState = useSelector((state:ApplicationState) => state.penalCode);
    const statusState = useSelector((state:ApplicationState) => state.status);
    const [status, setstatus] = useState<IStatus[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    const [current, setCurrent] = useState<IPenalCode>(initialValue)
    const [penalCodes, setPenalCodes] = useState<IPenalCode[]>([])
    const  {register, handleSubmit} = useForm()
    const formRef =useRef(document.createElement('form'))
    const navigate = useNavigate()



    useEffect(()=>{
        if(statusState.data.length===0)
            requestStatus(dispatch)
        setstatus(statusState.data)
        setPenalCodes(penalCodeState.data)
        setLoading(penalCodeState.loading)
        setError(penalCodeState.error)
    },[])

    useEffect(()=>{
        setstatus(statusState.data)
        setPenalCodes(penalCodeState.data)
        setLoading(penalCodeState.loading)
        setError(penalCodeState.error)
    },[statusState,penalCodeState])



   
    const setSubmit = (data:any)=>{
        setLoading(true)
        data.dataCriacao=Date.now().toString()
        api.post('codigopenal',data)
        .then((res)=>{
            console.log('<<',res.data)
            const value:IPenalCode = formatPenalCode(res.data,status)
            const response:IPenalCode[] = [...penalCodes,value]
            alert('aa')
            dispatch(actionsPenalCodes.loadSucces(response))
            navigate('/', {state:{from:window.location.pathname,data:value}})
        }).catch(err=>{
            console.error(err)
            dispatch(actionsPenalCodes.loadFailure())
        }).finally(()=>{
            setLoading(false)
        })
    }
    return (
        <StyForm ref={formRef} onSubmit={handleSubmit(setSubmit)}>
            <main >
                <div className="header">
                    <Input isDisabled={loading} {...register('nome')}  />
                    <Select isDisabled={loading} placeholder='Status' {...register('status')} >
                        {status.map((s,i)=>
                            <option key={i} value={s.id}>{s.descricao}</option>
                        )}
                    </Select> 
                </div>
                <Divider />
                <div className="content">
                    <div>
                        <div>
                            <label htmlFor ="multa"><b>Multa:</b> R$ </label>
                            <Input isDisabled={loading} type={'number'} id='multa' {...register('multa')} />
                        </div>
                        <div>
                            <label htmlFor ="tempoPrisao"><b>Tempo de Prisão(dias): </b></label>
                            <Input isDisabled={loading} type={'number'}  id='tempoPrisao'  {...register('tempoPrisao')}/>
                        </div>
                    </div>
                    <Textarea isDisabled={loading} className="description"  {...register('descricao')}/>
                </div>
            </main>
            <div className="controls">
                <Button  onClick={()=>{navigate('/')}}>Cancelar</Button>
                <Button type="submit" 
                    isLoading={loading}
                    loadingText='...'
                    onSubmit={(e)=>e.preventDefault()}>Adicionar</Button>
            </div>
        </StyForm>
    )
}

export default AddPenalCode;