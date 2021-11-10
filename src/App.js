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