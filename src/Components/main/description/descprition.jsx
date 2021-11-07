import { Component } from "react";
import "../../header/header.css";
import Criativity from "../Images/ideia-criativa.svg";
import Calm from "../Images/calma.svg";
import TeamWork from "../Images/equipe-de-trabalho.svg";

class Description extends Component {
  render() {
    return (
      <div className="description">
        <div className="center">
          <div className="two-columns">
            <iframe
              width="510"
              height="300"
              src="https://www.youtube.com/embed/VpPrZA8ZHfk"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <p>
              Em uma busca constante por aprimoramento, nossos integrantes
              apresentam interesses em diversas áreas, desde{" "}
              <strong>desenvolvimento mobile</strong> até{" "}
              <strong>perícia computacional</strong>. Com certeza, a IMED e o
              +PraTi foram essenciais em nosso autoconhecimento e para que
              soubessemos sobre as <strong>possibilidades</strong> no mercado de
              tecnologia. Esta Landing Page só demonstra que nossas diferenças,
              quando em conjunto, são capazes de criar algo novo que antes seria
              inimaginável. Com referências ao <strong>VaporWave</strong> e ao{" "}
              <strong>Brooklyn</strong> dos anos 80, convidamos você para uma
              viagem ao passado enquanto vislumbramos o futuro.
            </p>
          </div>
          <div className="qualities">
            <h2>Qualidades e Características</h2>
            <div className="line-heading"></div>
            <div className="qualities-items">
              <div className="quality">
                <div className="circle">
                  <img
                    src={Criativity}
                    className="qualities-icon"
                    alt="Criativo"
                  />
                </div>
                <h3>Criativo</h3>
              </div>
              <div className="quality">
                <div className="circle">
                  <img
                    src={Calm}
                    className="qualities-icon"
                    alt="Descontraido"
                  />
                </div>
                <h3>Descontraído</h3>
              </div>
              <div className="quality">
                <div className="circle">
                  <img
                    src={TeamWork}
                    className="qualities-icon"
                    alt="Trabalho em equipe"
                  />
                </div>
                <h3>Multidisciplinar</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Description;
