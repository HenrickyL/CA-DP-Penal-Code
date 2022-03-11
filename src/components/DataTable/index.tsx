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
import {NavLink} from 'react-router-dom'



interface IProp{
    loading?: boolean
    values: any[],
    notFoundText?:string
    headers: string[]
}

const DataTable = (props:IProp)=>{
    const [edit,setEdit] = useState<boolean>(false)

    const handleClick = ()=>{
        setEdit(!edit)
    }
    useEffect(()=>{
        console.log('>>',props.headers,props.values)
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
                        <StyTr key={`r${i}`} status={pc.status && ''} >
                            <StyTd>{pc.nome}</StyTd>
                            <StyTd >{pc.multa}</StyTd>
                            <StyTd>{pc.tempoPrisao}</StyTd>
                            <StyTd>{pc.dataCriacao}</StyTd>
                            <StyTd>{pc.status}</StyTd>
                            <StyTd className={`bt-edit`}> 
                                <NavLink className={edit ? 'editable' : ''} to={`/${pc.id}/${edit? 'edit':''}`}>
                                    {edit? <EditBt/> : <ExternalLink/>}
                                </NavLink>
                            </StyTd>
                        </StyTr>
                        )
                        :<Spinner size='xl' />
                }
            </Tbody>
    </StyTable>
    )
}

export default DataTable