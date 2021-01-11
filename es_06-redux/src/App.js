import './App.css';
import React, { Component } from 'react';
import FilmList from './components/FilmList';
import NavBar from './components/NavBar';

const API_KEY='4cb9def9';
const API_URL = 'http://www.omdbapi.com';

async function fetchFilms(serach)
{
  const res = await fetch(API_URL + '?apikey=' + API_KEY + '&s=' + serach);
  return await res.json();
}

class App extends Component{

  constructor(props)
  {
    super(props);
    this.state = {
      films :  [],
      totalCount: 0
    }
  }
  
  searchFilm = (term = 'west') =>{
    if(term.length< 3){
      return
    }
    fetchFilms(term).then(res => {
     this.setState({
       films : res.Search,
       totalCount : res.totalResults
     })
   })
  }
  
  getFilms()
  {
    return this.state.films.map(({imdbID,Title}) => {
      return (<li key={imdbID}>{Title}</li>)
    })
  }

  render(){
    return (
      <React.Fragment>
        <NavBar onSerachTerm={this.searchFilm}></NavBar>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">es-06 - Redux !!!</h1>
            <p className="lead">Lista dei miei film.</p>
          </div>
        </div>
        
        <div className="container">
          <FilmList films={this.state.films}></FilmList>
        </div>
      
      </React.Fragment>
    );
  }

  componentDidMount()
  {
    this.searchFilm('back to the future');
  }
}

export default App;
