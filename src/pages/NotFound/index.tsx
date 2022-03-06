import { StyNotFound,StyStrip } from "./style"

interface IPoliceStripProp{
    angle?:string;
}
const PoliceStrip = (prop:IPoliceStripProp)=>(
    <StyStrip angle={prop.angle}>
                <div className="content">
                    <div>
                        <span>Volte para a página principal</span>
                        <span>Área perigosa</span>
                        <span>Não ultrapasse</span>
                    </div>
                    <div>
                        <span>Volte para a página principal</span>
                        <span>Área perigosa</span>
                        <span>Não ultrapasse</span>
                    </div>

                    <div>
                        <span>Volte para a página principal</span>
                        <span>Área perigosa</span>
                        <span>Não ultrapasse</span>
                    </div>
                    <div>
                        <span>Volte para a página principal</span>
                        <span>Área perigosa</span>
                        <span>Não ultrapasse</span>
                    </div>
                   
            
                </div>
                
                
            </StyStrip>
)

export const NotFound = ()=>{


    return(
        <StyNotFound>
            <h1>404</h1>
            <PoliceStrip/>
            <PoliceStrip angle={'-30deg'}/>

        </StyNotFound>
    )
}
