import React, { Component } from 'react';
import { Header, SquadInfo, Members, Form, Footer } from './Components';
import './assets/App.css'

class App extends Component{
  render(){
    return (
      <>
        <Header />
        <main>
          <SquadInfo />
          <Members />
          <Form />
        </main>
        <Footer/>
      </>
    );
  }
}  

export default App;
/*
criar os subComponents da Main (introdução video integrantes )
tornar o css global ou criar um para cada component

brainstorm

comentarios com formulario utilizando banco de dados online 


material UI
*/