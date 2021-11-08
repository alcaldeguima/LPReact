import { Component } from "react";
import "../../header/header.css";

class Intro extends Component {
  render() {
    return (
      <div className="introduction">
        <div class="center">
          <h1>
            Conheça a <strong>Dev Stuy</strong>
          </h1>
          <div class="line-heading"></div>

          <p>
            Somos um coletivo formado por alunos bolsistas do projeto
            #TeuFuturo. Através da tecnologia, queremos deixar a nossa marca no
            mundo. Com habilidades e características distintas, nós formamos um
            grupo colaborativo que anseia por novos desafios. Este projeto é
            apenas o começo da nossa história. Embarque com a gente nesta
            jornada!
          </p>
        </div>
      </div>
    );
  }
}
export default Intro;
