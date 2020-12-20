import './App.css';
import React, { Component } from 'react';
import Clock from './Clock';

const ciao=<h2>Ciao JSX !!!!</h2>;
function getDate(date)
{
  return date.toLocaleDateString() + ' ; ' + date.toLocaleTimeString()
}
class App extends Component{
  render(){
    return (
      <React.Fragment>
      <div className="App">
         <h1 className="red">es-02 - JSX</h1>
      </div>
      {ciao}
      <h2> { 4+4 } </h2>
      <Clock nazione="Italia" timezone="2" />
      <Clock nazione="Burundi" timezone="-6"/>
      <h2> Oggi è { getDate(new Date()) }</h2>
      <h2> { getDate(new Date()) }</h2>
      </React.Fragment>
    );
  }
}

export default App;
