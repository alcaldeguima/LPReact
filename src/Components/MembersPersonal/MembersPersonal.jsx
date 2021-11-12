import React, { Component } from 'react';
import linkedin from "../../assets/images/linkedin.svg";
import github from "../../assets/images/github.svg";
import instagram from "../../assets/images/instagram.svg";
import "./members-personal.css"

class MembersPersonal extends Component {
    constructor(props){
        super(props);
        this.integrantes = this.props.integrantes.integrantes;
    }
    render() { 
        return (
            <>
            {this.integrantes.map ((integrante, index) => {
                return(
                    <section key={index}>
                        <div id={integrante.scroll} className="scroll-to-member"></div>
                    
                        <div className={integrante.background}>
                            <div className="center">
                                <div className={integrante.colunas}>
                                    <div className="member-image">
                                        <div className="circle">
                                            <img src={integrante.src}/>
                                        </div>
                                    </div>
                                    <div className="member-information">
                                        <h2>{integrante.nome}</h2>
                                        <div className="line-heading" id={integrante.line}>
                                        </div>
                                        <p>{integrante.text}</p>
                                        <div className="social-media">
                                            <a href={integrante.linkedin} target="_blank">
                                                <div className="social-media-icon">
                                                    <img src={linkedin} alt="LinkedIn Logo"/>
                                                </div>
                                            </a>
                                            <a href={integrante.github} target="_blank">
                                                <div className="social-media-icon">
                                                    <img src={github} alt="GitHub Logo"/>
                                                </div>
                                            </a>
                                            <a href="#" target="_blank">
                                                <div className="social-media-icon">
                                                    <img src={instagram} alt="Instagram Logo"/>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            })}
        </>
        );
    }

}
 
export default MembersPersonal;