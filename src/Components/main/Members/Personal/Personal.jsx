import { Component} from 'react';
import alcalde from "../images/alcalde.jpeg";
import lucas from "../images/lucas.jpeg";
import mariana from "../images/mariana.jpeg";
import pedro from "../images/pedro.jpeg";
import linkedin from "../images/linkedin.svg";
import github from "../images/github.svg";
import instagram from "../images/instagram.svg";

class Personal extends Component {
    render() { 
        return (
            <>
                <div id="scroll-jp" className="scroll-to-member"></div>

                <div className="personal">
                    <div className="center">
                        <div className="two-columns">
                            <div className="member-image">
                                <div className="circle">
                                    <img src={alcalde}/>
                                </div>
                            </div>
                            <div className="member-information">
                                <h2>João Pedro</h2>
                                <div className="line-heading" id="line-jp">
                                </div>
                                <p>Apaixonado por tecnologia, sempre fui entusiasta e gostei de me manter atualizado com as novidades do mercado. Esse interesse me levou a entrar no ensino médio técnico em informática no Instituto Federal (IFSul), onde atualmente curso o 3º ano. Sou uma pessoa dedicada e que gosta de desafios, tanto no âmbito profissional, quanto no pessoal.</p>
                                <div className="social-media">
                                    <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-alcalde-guimar%C3%A3es-617523208/" target="_blank">
                                        <div className="social-media-icon">
                                            <img src={linkedin} alt=""/>
                                        </div>
                                    </a>
                                    <a href="https://github.com/alcaldeguima" target="_blank">
                                        <div className="social-media-icon">
                                            <img src={github} alt=""/>
                                        </div>
                                    </a>
                                    <a href="#" target="_blank">
                                        <div className="social-media-icon">
                                            <img src={instagram} alt=""/>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div id="scroll-lucas" className="scroll-to-member"></div>

                <div className="personal reversed">
                    <div className="center">
                        <div className="two-columns reversed">
                            <div className="member-image">
                                <div className="circle">
                                    <img src={lucas}/>
                                </div>
                            </div>
                            <div className="member-information">
                                <h2>Lucas</h2>
                                <div className="line-heading" id="line-lucas">
                                </div>
                                <p>Dedico diariamente um momento para estudar e colocar em prática os conhecimentos absorvidos, relativos a programação (tecnologia) e comunicação (soft skills). Além disso, gosto muito de apresentar projetos e utilizar a criatividade, com a finalidade de impactar as pessoas.</p>
                                <div className="social-media">
                                    <a href="#" target="_blank">
                                        <div className="social-media-icon">
                                            <img src={linkedin} alt=""/>
                                        </div>
                                    </a>
                                    <a href="#" target="_blank">
                                        <div className="social-media-icon">
                                            <img src={github} alt=""/>
                                        </div>
                                    </a>
                                    <a href="#" target="_blank">
                                        <div className="social-media-icon">
                                            <img src={instagram} alt=""/>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="scroll-mari" className="scroll-to-member"></div>

                <div className="personal">
                    <div className="center">
                        <div className="two-columns">
                            <div className="member-image">
                                <div className="circle">
                                    <img src={mariana}/>
                                </div>
                            </div>
                            <div className="member-information">
                                <h2>Mariana</h2>
                                <div className="line-heading" id="line-masiero">
                                </div>
                                <p>Comecei a estudar sobre programação em abril de 2021 quando entrei para o projeto #TeuFuturo. Dentro do projeto conheci muitas pessoas experientes na área, as quais nos deram inúmeras dicas. Hoje eu pretendo seguir a carreira de engenharia computacional e futuramente trabalhar na perícia computacional.</p>
                                <div className="social-media">
                                    <a href="#" target="_blank">
                                        <div className="social-media-icon">
                                            <img src={linkedin} alt=""/>
                                        </div>
                                    </a>
                                    <a href="#" target="_blank">
                                        <div className="social-media-icon">
                                            <img src={github} alt=""/>
                                        </div>
                                    </a>
                                    <a href="#" target="_blank">
                                        <div className="social-media-icon">
                                            <img src={instagram} alt=""/>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="scroll-pedro" className="scroll-to-member"></div>

                <div className="personal reversed">
                    <div className="center">
                        <div className="two-columns reversed">
                            <div className="member-image">
                                <div className="circle">
                                    <img src={pedro}/>
                                </div>
                            </div>
                            <div className="member-information">
                                <h2>Pedro</h2>
                                <div className="line-heading" id="line-pedro">
                                </div>
                                <p>Desde criança, sempre gostei de criar. Me aventurei em todas as áreas possíveis para descobrir com o que eu quero trabalhar, mas foi pela programação que eu me apaixonei. Vejo a tecnologia como o caminho que escolhi para criar e deixar um impacto positivo no mundo.</p>
                                <div className="social-media">
                                    <a href="https://www.linkedin.com/in/pzardin/" target="_blank">
                                        <div className="social-media-icon">
                                            <img src={linkedin} alt=""/>
                                        </div>
                                    </a>
                                    <a href="#" target="_blank">
                                        <div className="social-media-icon">
                                            <img src={github} alt=""/>
                                        </div>
                                    </a>
                                    <a href="https://www.instagram.com/pzardin/?hl=pt-br" target="_blank">
                                        <div className="social-media-icon">
                                            <img src={instagram} alt=""/>
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
 
export default Personal;