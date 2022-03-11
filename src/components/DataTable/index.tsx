import {
    Tbody,
    Tr,
    Th,
    Skeleton,
    Checkbox,
    Spinner,
  } from '@chakra-ui/react'
import {StyTable, StyTd, StyThead, StyTr} from './style'
import {FaRegEdit as EditBt} from 'react-icons/fa'
import {MdEdit as Edit} from 'react-icons/md'
import {FiExternalLink as ExternalLink} from 'react-icons/fi'
import { useEffect, useState } from 'react'
import {NavLink, useNavigate} from 'react-router-dom'



interface IProp{
    loading?: boolean
    values: any[]
    notFoundText?:string
    headers: string[]
    formater?(...a:any):any
}

const DataTable = (props:IProp)=>{
    const [edit,setEdit] = useState<boolean>(false)
    const navigate = useNavigate()

    const handleClick = ()=>{
        setEdit(!edit)
    }
    const handleRedirect = (data:any,edit:boolean)=>{
        navigate(`${data.id}${edit? '/edit':''}`, { state: data});
    }
    useEffect(()=>{
    },[])
    return(
        <StyTable variant='simple'>
            <StyThead>
                <Tr>
                    {props.headers.map((h,i)=>
                        <Th key={`h${i}`}>{h}</Th>
                        )}
                        <Th key={'h-edit'}><Checkbox onChange={handleClick}><Edit/></Checkbox></Th>
                </Tr>
            </StyThead>
            <Tbody>
                {
                    props.loading? 
                        (Array<number>(5).fill(0)).map((x,i)=>
                            <StyTr key={`r${i}`}>
                                <StyTd><Skeleton height='10px' /></StyTd>
                                <StyTd><Skeleton height='10px' /></StyTd>
                                <StyTd><Skeleton height='10px' /></StyTd>
                                <StyTd><Skeleton height='10px' /></StyTd>
                                <StyTd><Skeleton height='10px' /></StyTd>
                            </StyTr>
                        )
                    :
                    props.values.length>0 ?
                    props.values.map((pc,i) =>
                        <StyTr key={`r${i}`} status={pc.status} >
                            <StyTd>{pc.nome}</StyTd>
                            <StyTd >{pc.multa}</StyTd>
                            <StyTd>{pc.tempoPrisao}</StyTd>
                            <StyTd>{pc.dataCriacao}</StyTd>
                            <StyTd>{pc.status}</StyTd>
                            <StyTd className={`bt-edit ${edit ? 'editable' : ''}`} onClick={()=>handleRedirect(pc,edit) }> 
                                    {edit? <EditBt/> : <ExternalLink/>}
                            </StyTd>
                        </StyTr>
                        )
                        : <Spinner size='xl' />
                }
            </Tbody>
    </StyTable>
    )
}

export default DataTable