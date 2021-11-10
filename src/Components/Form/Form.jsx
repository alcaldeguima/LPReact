import React, { Component } from "react";
import "./form.css";

class Form extends Component {
  render() {
    return (
      <>
        <div id="contato"></div>
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
