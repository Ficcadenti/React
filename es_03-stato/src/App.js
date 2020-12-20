import './App.css';
import React, { Component } from 'react';
import Clock from './Clock';
import Clock2 from './Clock2';

const ciao=<h2 className="greenyellow">Ciao JSX !!!!</h2>;
class App extends Component{
  render(){
    return (
      <React.Fragment>
        {ciao}
        <h2 className="red"> {4+4} </h2>

        <div className="App">
          <h1 className="red">es-03 - Stato</h1>
        </div>
      
        <Clock secs="1" nazione="Italy" timezone="0" />
        <Clock secs="2" nazione="Russia" timezone="-6" />
        <Clock2 secs="3" nazione="England" timezone="1" />
     
      </React.Fragment>
    );
  }
}

export default App;
