import { useParams } from "react-router-dom";

interface IProp{
    edit?:boolean
}
const PenalCodeDetails = (prop:IProp)=>{
    const {id} = useParams();
    return(
        <h1>PenalCodeDetails: {id} {prop.edit? 'edit':''}</h1>
    )
}

export default PenalCodeDetails;