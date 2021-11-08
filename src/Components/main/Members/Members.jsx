import { Component } from 'react';
import "../../header/header.css";
import alcalde from "./images/alcalde.jpeg";
import lucas from "./images/lucas.jpeg";
import mari from "./images/mariana.jpeg";
import pedro from "./images/pedro.jpeg";
import Personal from './Personal';
class Members extends Component {
    constructor (){
        super();
        this.integrantes= [
            {scroll:"#scroll-jp", id:"joaopedro", src: alcalde, nome: "João Pedro" },
            {scroll:"#scroll-lucas", id:"lucas", src: lucas, nome: "Lucas" },
            {scroll:"#scroll-mari", id:"mari", src: mari, nome: "Mari" },
            {scroll:"#scroll-pedro", id:"pedro", src: pedro, nome: "Pedro" }
        ];
    }
    render() { 
        return (
            <>
                <div id="membros"></div>

                <div className="members">
                    <div className="center">
                        <h2>
                            Conheça os integrantes
                        </h2>
                        <div className="line-heading">
                        </div>

                        <div className="members-photos">
                            {this.integrantes.map((integrante, index) =>{
                                return(
                                    <a key={index} href={integrante.scroll}>
                                        <div className="member" id={integrante.id}>
                                            <div className="circle">
                                                <img src={integrante.src} className="pic"/>
                                            </div>
                                            <h3>{integrante.nome}</h3>
                                        </div>
                                    </a> 
                                );
                            })}
                        </div>
                    </div>
                </div>
                <Personal/>
            </>
        )
    }
}
 
export default Members;