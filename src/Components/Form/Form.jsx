import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button"
import { makeStyles, styled } from "@material-ui/styles"
import "./form.css";

const useStyles = makeStyles ({
  input: {
    width: 330,
    margin: '15px 0',
    "&.Mui-focused": {
      border: "1px solid #b967ff",
      '& .MuiOutlinedInput-notchedOutline': {
        border: 'none'
      }
    },
  },
})

const MyButton = styled(Button)({
  backgroundColor: '#b967ff'
})

const Form = (props) => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [comentario, setComentario] = useState('')
  const classes = useStyles()

  const _publicarComentario = (event) => {
      event.preventDefault()
      event.stopPropagation()
      props.comentarios.criarComentario(nome, email, comentario)
  }

  return (
    <>
      <div id="contato"></div>
      <div className="contact">
        <div className="center">
          <form onSubmit={_publicarComentario}>
            <h2>Comentários</h2>
            {/* <input
              type="text"
              name="nome"
              id="nome"
              placeholder="Nome Completo"
              
            />
            <input 
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              
            />
            <input 
              type="text"
              name="comentario"
              id="comentario"
              placeholder="Escreva seu comentário"
              onChange={(event) => setComentario(event.target.value)}
            /> */}
            <TextField
              id="outlined-basic"
              placeholder="Nome Completo"
              variant="outlined"
              type="text"
              required
              InputProps={{ className: classes.input }}
              onChange={(event) => setNome(event.target.value)}
            />
            <TextField
              id="outlined-basic"
              placeholder="Email"
              variant="outlined"
              type="email"
              required
              InputProps={{ className: classes.input }}
              onChange={(event) => setEmail(event.target.value)}
            />
            <TextField 
              id="outlined-basic"
              placeholder="Escreva seu comentário"
              variant="outlined"
              type="text"
              required
              InputProps={{ className: classes.input }}
              onChange={(event) => setComentario(event.target.value)}
            />
            {/* <input type="submit" value="Enviar"/> */}
            <MyButton variant="contained">Enviar</MyButton>
          </form>
        </div>
      </div>
    </>
  );
  
}
 
export default Form;
