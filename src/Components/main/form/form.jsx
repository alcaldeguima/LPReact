import React, { useState } from "react";
import "../../header/header.css";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  return (
    <>
      <div className="contato"></div>
      <div className="contact">
        <div className="center">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              console.log(name, email, text);
            }}
          >
            <h2>Contato</h2>
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              type="text"
              name="name"
              id="name"
              placeholder="Nome Completo"
            />
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            />

            <input
              value={text}
              onChange={(event) => setText(event.target.value)}
              type="text"
              name="text"
              id="text"
              placeholder="Digite sua mensagem"
            />
            <input type="submit" value="Enviar" />
          </form>
        </div>
      </div>
    </>
  );
}
export default Form;
