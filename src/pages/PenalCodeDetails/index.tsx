import {  ChangeEvent, MouseEvent, useEffect, useState } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { ApplicationState } from "../../store";
import { IPenalCode } from "../../store/ducks/penalCode/types";
import { IStatus } from "../../store/ducks/status/types";
import { StyForm, StyPenalCodeDetails } from "./style";
import * as penalCodeAction from '../../store/ducks/penalCode/actions'
import { Button,  Divider,  IconButton, Input, Select, Spinner, Textarea } from "@chakra-ui/react";
import {CheckIcon,CloseIcon,EditIcon} from '@chakra-ui/icons'
import { requestStatus } from "../../services/dataService";

interface IProp{
    edit:boolean
}


const PenalCodeDetails = (prop:IProp)=>{
    const location = useLocation();
    const navigate = useNavigate()
    const dipatch = useDispatch()
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<boolean>(false)
    const [current, setCurrent] = useState<IPenalCode>(
        {
            id:'0',
            nome:'',
            dataCriacao:'',
            descricao:'',
            multa:'0',
            status:'-',
            tempoPrisao:'',
            statusId:''
        }
    )

    const [status, setstatus] = useState<IStatus[]>([])

    
    const penalCodeState = useSelector((state:ApplicationState) => state.penalCode);
    const statusState = useSelector((state:ApplicationState) => state.status);


    useEffect(()=>{
        requestStatus(dipatch)
        setstatus(statusState.data)
        const currentPenalCode = location.state as IPenalCode
        if(!currentPenalCode)
            navigate('/app')
        setCurrent(currentPenalCode)
        setLoading(penalCodeState.loading)
        setError(penalCodeState.error)
        
    },[])


    useEffect(()=>{
        setstatus(statusState.data)
        setLoading(penalCodeState.loading)
        setError(penalCodeState.error)
        console.log(statusState)

    },[penalCodeState,statusState])


    return(
        <StyPenalCodeDetails >
            {
                loading?
                    <Spinner/>
                    :
                    <FormPenalCodeDetail penalCode={current} edit={prop.edit} status={status}/>
                    
            }

        </StyPenalCodeDetails>
    )
}

interface IFormPenalCode{
    penalCode: IPenalCode
    status: IStatus[]
    edit?: boolean
}

function FormPenalCodeDetail({penalCode,status,edit}:IFormPenalCode) {
    /* Here's a custom control */
    const [oldValue, setOldValue] = useState<IPenalCode>(penalCode)
    const [aux, setAux] = useState<IPenalCode>(penalCode)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const penalCodeState = useSelector((state:ApplicationState) => state.penalCode);
    const statusState = useSelector((state:ApplicationState) => state.status);


    type TChangeOp = 'nome'|'status'|'multa'|'tempoPrisao'|'descricao'
    const handleChange = (op:TChangeOp, event:ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>)=>{
        const {value} = event.target
        switch (op) {
            case 'nome':
                setAux({...aux,nome:value})
                break;
            case 'status':
                console.log('<<<<<',status,value)
                const newStatus = status.find(x=>x.id===value)
                setAux({...aux,status:newStatus?newStatus.descricao:value})
                break;
            case 'multa':
                setAux({...aux,multa:value})
                break;
            case 'tempoPrisao':
                setAux({...aux,tempoPrisao:value})
                break;
            case 'descricao':
                setAux({...aux,descricao:value})
                break;
            default:
                console.error('EditFailed');
                break;
        }

    }

    const handleClick = (action: 'cancel'|'save',event:MouseEvent)=>{
        event.preventDefault()
        if(action==='save'){
            setOldValue(aux)
            const allPenalCodes = penalCodeState.data
            const index = allPenalCodes.findIndex(x=>x.id === penalCode.id)
            allPenalCodes[index] = oldValue
            dispatch(penalCodeAction.loadSucces(allPenalCodes))
        }
        navigate(`/app/${oldValue.id}`,{state:oldValue})
    }
    return (
        
        <StyForm  onSubmit={(e)=>e.preventDefault()}>
            
            {!edit && <IconButton className="bt-edit" aria-label="" size='sm' icon={<EditIcon />} onClick={()=>{navigate('edit')}}/>}
                {edit ? 
                    <main className="editable">
                        <div className="header">
                            <Input  defaultValue={oldValue.nome}  onChange={(e)=>handleChange('nome',e)}/>
                            <Select placeholder='Status' onChange={(e)=>handleChange('status',e)}>
                                {status.map((s,i)=>
                                    <option key={i} selected={s.id===oldValue.statusId} value={s.id}>{s.descricao}</option>
                                )}
                            </Select> 
                        </div>
                        <Divider />
                        <div className="content">
                            <div>
                                <div>
                                    <label htmlFor ="multa"><b>Multa:</b> R$ </label>
                                    <Input id='multa' defaultValue={oldValue.multa}  onChange={(e)=>handleChange('multa',e)}/>
                                </div>
                                <div>
                                    <label htmlFor ="tempoPrisao"><b>Tempo de Prisão(dias): </b></label>
                                    <Input  id='tempoPrisao' defaultValue={oldValue.tempoPrisao}  onChange={(e)=>handleChange('tempoPrisao',e)}/>
                                </div>
                            </div>
                            <Textarea className="description" defaultValue={oldValue.descricao} onChange={(e)=>handleChange('descricao',e)} resize={'none'}/>
                        </div>
                    </main>
                    :
                    <main>
                        <div className="header">
                                <span>{oldValue.nome}</span>
                                <span>{oldValue.status}</span>
                        </div>
                        <Divider />
                        <div className="content">
                            <div>
                                <span><b>Multa:</b> R$ {oldValue.multa}</span>
                                <span><b>Tempo de Prisão: </b>{oldValue.tempoPrisao} dias</span>
                            </div>

                            <p className="description">{oldValue.descricao}</p>
                        </div>
                        
                    </main>
                }


            {edit && <div className="controls">
                <Button  onClick={(e)=>handleClick("cancel",e)}><CloseIcon/></Button>
                <Button type="submit" onClick={(e)=>handleClick("save",e)}><CheckIcon/></Button>
            </div>}
        </StyForm>
    )
  }

export default PenalCodeDetails;