import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Skeleton,
  } from '@chakra-ui/react'


interface IProp{
    loading?: boolean
    values: any[],
    notFoundText?:string
    headers: string[]
}

const DataTable = (props:IProp)=>{
    return(
        <Table variant='simple'>
        <Thead>
            <Tr>
                {props.headers.map(h=>
                    <Th>{h}</Th>
                    )}
            </Tr>
            
        </Thead>
            <Tbody>
                {
                    props.loading? 
                        (Array<number>(5).fill(0)).map((x,i)=>
                            <Tr key={i}>
                                <Td><Skeleton height='10px'  /></Td>
                                <Td><Skeleton height='10px' /></Td>
                                <Td><Skeleton height='10px' /></Td>
                                <Td><Skeleton height='10px' /></Td>
                                <Td><Skeleton height='10px' /></Td>
                            </Tr>
                        )
                    :
                    props.values.length>0 &&
                    props.values.map((pc,i) =>
                        <Tr key={i}>
                            <Td>{pc.nome}</Td>
                            <Td >{pc.multa}</Td>
                            <Td>{pc.tempoPrisao}</Td>
                            <Td>{pc.dataCriacao}</Td>
                            <Td>{pc.status}</Td>

                        </Tr>
                        )                          
                    
                }
            </Tbody>
            {props.values.length ===0 && <span>Nenhum código penal encontrado</span>}
           
            
        
    </Table>
    )
}

export default DataTable