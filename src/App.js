import Header from './Components/header';
import Footer from './Components/footer';
import './assets/App.css'
import './assets/fonts.css'
import { Component } from 'react';
import Main from './Components/main';

class App extends Component{
  render(){
    return (
      <>
      <Header />
      <Main/>
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