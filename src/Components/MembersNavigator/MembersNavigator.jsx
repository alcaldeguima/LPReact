import React, { Component } from 'react';
import "./members-navigator.css"

class MembersNavigator extends Component {
    constructor(props) {
        super(props)
        this.integrantes = this.props.integrantes.integrantes
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
            </>
        )
    }
}

export default MembersNavigator