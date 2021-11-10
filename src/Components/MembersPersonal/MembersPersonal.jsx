import React, { Component } from 'react';
import linkedin from "../../assets/images/linkedin.svg";
import github from "../../assets/images/github.svg";
import instagram from "../../assets/images/instagram.svg";
import "./members-personal.css"

class MembersPersonal extends Component {
    constructor(){
        super();
        this.integrantes = this.props.integrantes.integrantes;
    }
    render() { 
        return (
            <>
                <div id={this.integrantes.scroll} className="scroll-to-member"></div>
                
                <div className={this.integrantes.background}>
                    <div className="center">
                        <div className={this.integrantes.colunas}>
                            <div className="member-image">
                                <div className="circle">
                                    <img src={this.integrantes.src}/>
                                </div>
                            </div>
                            <div className="member-information">
                                <h2>{this.integrantes.nome}</h2>
                                <div className="line-heading" id={this.integrantes.id}>
                                </div>
                                <p>{this.integrantes.text}</p>
                                <div className="social-media">
                                    <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-alcalde-guimar%C3%A3es-617523208/" target="_blank">
                                        <div className="social-media-icon">
                                            <img src={linkedin} alt="LinkedIn Logo"/>
                                        </div>
                                    </a>
                                    <a href="https://github.com/alcaldeguima" target="_blank">
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
        </>
        );
    }

}
 
export default MembersPersonal;