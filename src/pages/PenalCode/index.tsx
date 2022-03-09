import { StyPenalCode } from "./style"
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
  } from '@chakra-ui/react'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ApplicationState } from "../../store"
import { IPenalCode } from "../../store/ducks/penalCode/types"
import * as penalCodeAction from '../../store/ducks/penalCode/actions'
import api from "../../services/apiService"


const PenalCode = ()=>{
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)

    const [penalCodes, setPenalcodes] = useState<IPenalCode[]>([])


    const dispatch = useDispatch()
    const penalCodeState = useSelector((state:ApplicationState) => state.penalCode);

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
    useEffect(()=>{
        dispatch(penalCodeAction.loadRequest())
        requestPenalCodes()
        setPenalcodes(penalCodeState.data)
        setLoading(penalCodeState.loading)
        setError(penalCodeState.error)
    },[])


    useEffect(()=>{
        console.log(penalCodeState)
        setPenalcodes(penalCodeState.data)
        setLoading(penalCodeState.loading)
        setError(penalCodeState.error)
    },[penalCodeState])


    return(
        <StyPenalCode>
            <div>
                <Table variant='simple'>
                    <TableCaption>Imperial to metric conversion factors</TableCaption>
                    <Thead>
                        <Tr>
                        <Th>Nome</Th>
                        <Th isNumeric>Multa</Th>
                        <Th>Tempo de Prisão</Th>
                        <Th>Data</Th>
                        <Th>Status</Th>
                        </Tr>
                    </Thead>
                        <Tbody>
                        {penalCodes.length>0 &&
                            penalCodes.map((pc,i) =>
                            <Tr key={i}>
                                <Td>{pc.nome}</Td>
                                <Td>{pc.multa}</Td>
                                <Td>{pc.tempoPrisao}</Td>
                                <Td>{pc.dataCriacao}</Td>
                                <Td>{pc.status}</Td>

                            </Tr>
                            )                          
                        }
                        </Tbody>
                        {penalCodes.length ===0 && <span>Nenhum código penal encontrado</span>}
                       
                        
                    
                </Table>
            </div>
        </StyPenalCode>

    )
}

export default PenalCode