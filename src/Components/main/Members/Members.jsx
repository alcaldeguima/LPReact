import { Component } from 'react';
import "../../header/header.css";
import alcalde from "./images/alcalde.jpeg";
import lucas from "./images/lucas.jpeg";
import mari from "./images/mariana.jpeg";
import pedro from "./images/pedro.jpeg";
import Personal from './Personal';
class Members extends Component {
    render() { 
        return (
            <>
                <div id="membros"></div>

                <div class="members">
                    <div class="center">
                        <h2>
                            Conheça os integrantes
                        </h2>
                        <div class="line-heading">
                        </div>

                        <div class="members-photos">
                            <a href="#scroll-jp">
                                <div className="member" id="joaopedro">
                                    <div className="circle">
                                        <img src={alcalde} className="pic"/>
                                    </div>
                                    <h3>João Pedro</h3>
                                </div>
                            </a>
                            <a href="#scroll-lucas">
                                <div className="member" id="lucas">
                                    <div className="circle">
                                        <img src={lucas} className="pic"/>
                                    </div>
                                    <h3>Lucas</h3>
                                </div>
                            </a>
                            <a href="#scroll-mari">
                                <div className="member" id="mari">
                                    <div className="circle">
                                        <img src={mari} className="pic"/>
                                    </div>
                                    <h3>Mariana</h3>
                                </div>
                            </a>    
                            <a href="#scroll-pedro">
                                <div className="member" id="pedro">
                                    <div className="circle">
                                        <img src={pedro} className="pic" />
                                    </div>
                                    <h3>Pedro</h3>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <Personal/>
            </>
        )
    }
}
 
export default Members;