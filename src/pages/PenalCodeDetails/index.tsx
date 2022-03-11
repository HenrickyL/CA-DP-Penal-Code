import {  useEffect, useState } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { ApplicationState } from "../../store";
import { IPenalCode } from "../../store/ducks/penalCode/types";
import { IStatus } from "../../store/ducks/status/types";
import { StyForm, StyPenalCodeDetails } from "./style";
import * as penalCodeAction from '../../store/ducks/penalCode/actions'
import { Button, ButtonGroup,  Editable, EditableInput, EditablePreview, EditableTextarea, Flex, IconButton, Input, Select, Spinner, useEditableControls, UseEditableReturn } from "@chakra-ui/react";
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
   

    

    const handleClick = (action: 'cancel'|'save')=>{
        setEdit(!edit)
    }
    return (
        
        <StyForm  >
            {!edit && <IconButton aria-label="" size='sm' icon={<EditIcon />} onClick={()=>{setEdit(!edit)}}/>}
            
            <main>
                <div className="header">
                    <Editable defaultValue={oldValue.nome} isDisabled={!edit} >
                        <EditablePreview />
                        <Input  as={EditableInput} />
                    </Editable>

                    {
                        edit ?   
                            <Select placeholder='Status'>
                                {status.map((s,i)=>
                                    <option key={i} selected={s.id===oldValue.statusId} value={s.id}>{s.descricao}</option>
                                )}
                            </Select> :
                            <span>{oldValue.status}</span>
                    }
                </div>

                <Editable defaultValue={ oldValue.multa} isDisabled={!edit} >
                    <EditablePreview />
                    <Input as={EditableInput} />
                </Editable>
                <Editable defaultValue={ oldValue.tempoPrisao} isDisabled={!edit} >
                    <EditablePreview />
                    <Input as={EditableInput} />
                </Editable>

                <Editable defaultValue={oldValue.descricao} isDisabled={!edit} >
                    <EditablePreview />
                    <Input  as={EditableTextarea} />
                </Editable>



            </main>
            {edit && <div>
                <Button  onClick={()=>handleClick("cancel")}><CloseIcon/></Button>
                <Button onClick={()=>handleClick("save")}><CheckIcon/></Button>
            </div>}
        </StyForm>
    )
  }

export default PenalCodeDetails;