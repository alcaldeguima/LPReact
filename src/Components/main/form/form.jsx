import { Component } from "react";
import "../../header/header.css";

class Form extends Component {
  render() {
    return (
      <>
        <div className="contato"></div>
        <div className="contact">
          <div className="center">
            <form>
              <h2>Contato</h2>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Nome Completo"
              />
              <input type="email" name="email" id="email" placeholder="Email" />
              <input type="submit" value="Enviar" />
            </form>
          </div>
        </div>
      </>
    );
  }
}
export default Form;
