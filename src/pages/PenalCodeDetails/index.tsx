import {  ChangeEvent, MouseEvent, useEffect, useState } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { ApplicationState } from "../../store";
import { IPenalCode } from "../../store/ducks/penalCode/types";
import { IStatus } from "../../store/ducks/status/types";
import { StyForm, StyPenalCodeDetails } from "./style";
import * as penalCodeAction from '../../store/ducks/penalCode/actions'
import { Button, ButtonGroup,  Divider,  Editable, EditableInput, EditablePreview, EditableTextarea, Flex, IconButton, Input, Select, Spinner, Textarea, useEditableControls, UseEditableReturn } from "@chakra-ui/react";
import {CheckIcon,CloseIcon,EditIcon} from '@chakra-ui/icons'
import { requestStatus } from "../../services/dataService";

interface IProp{
    edit:boolean
}


const PenalCodeDetails = (prop:IProp)=>{
    const location = useLocation();
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
        console.log('>>',currentPenalCode)
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
                    <FormPenalCodeDetail penalCode={current} status={status}/>
                    
            }

        </StyPenalCodeDetails>
    )
}

interface IFormPenalCode{
    penalCode: IPenalCode
    status: IStatus[]
}

function FormPenalCodeDetail({penalCode,status}:IFormPenalCode) {
    /* Here's a custom control */
    const [edit, setEdit]= useState<boolean>(false)
    const [oldValue, setOldValue] = useState<IPenalCode>(penalCode)
    const [aux, setAux] = useState<IPenalCode>(penalCode)

   
    type TChangeOp = 'nome'|'status'|'multa'|'tempoPrisao'|'descricao'
    const handleChange = (op:TChangeOp, event:ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>)=>{
        const {value} = event.target
        switch (op) {
            case 'nome':
                setAux({...aux,nome:value})
                break;
            case 'status':
                setAux({...aux,status:value})
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
        }
        setEdit(!edit)
    }
    return (
        
        <StyForm  onSubmit={(e)=>e.preventDefault()}>
            
            {!edit && <IconButton className="bt-edit" aria-label="" size='sm' icon={<EditIcon />} onClick={()=>{setEdit(!edit)}}/>}
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
                                <Input  defaultValue={oldValue.multa}  onChange={(e)=>handleChange('multa',e)}/>
                                <Input  defaultValue={oldValue.tempoPrisao}  onChange={(e)=>handleChange('tempoPrisao',e)}/>
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
                                <span><b>Multa:</b>{oldValue.multa}</span>
                                <span><b>Tempo de Prisão:</b>{oldValue.tempoPrisao}</span>
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