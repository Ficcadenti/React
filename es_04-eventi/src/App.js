import './App.css';
import React, { Component } from 'react';
import Clock from './Clock';

const ciao=<h2 className="greenyellow">Ciao JSX !!!!</h2>;

const clocks = [
  {
      secs:"1",
      nazione:"Italia",
      timezone:"0"
  },
  {
      secs:"2",
      nazione:"Inghilterra",
      timezone:"-2"
  },
  {
      secs:"3",
      nazione:"America",
      timezone:"-6"
  },
  {
    secs:"3",
    nazione:"Cuba",
    timezone:"-6"
}
];

class App extends Component{

  getClocks()
  {
      return clocks.map(({secs,nazione,timezone})=>{ return (
      <Clock 
          key={nazione}
          secs={secs} 
          nazione={nazione} 
          timezone={timezone} 
      />) });
  }

  render(){
    return (
      <React.Fragment>
        {ciao}

        <div className="App">
          <h1 className="red">es-04 - Eventi !!!</h1>
        </div>
        <ul>
          {this.getClocks()}
        </ul>
      
      </React.Fragment>
    );
  }
}

export default App;
