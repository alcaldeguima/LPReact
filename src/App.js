import React, { Component } from 'react';
import Header from './Components/header';
import SquadInfo from './Components/SquadInfo';
import Members from './Components/Members';
import Form from './Components/Form';
import Footer from './Components/footer';
// import { Header, SquadInfo, Members, Form, Footer } from './Components';
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