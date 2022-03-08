import React, { Component } from 'react';
import {createStore} from 'redux';
import './App.css';

let todos=['Cricare legna','Riunione UNAR','Pranzo'];

function storeReducer(state={},action)
{
  return {...state};
}

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
       todos :  []
    }
    this.todoInput=React.createRef('input');
  }


  componentDidMount() {
    const store = createStore(storeReducer, {todos: [...todos]} );
    console.log(store.getState())
    this.setState({todos:[...store.getState().todos] })
  }

  addTodo =() => {
    const todo=this.todoInput.current.value;
    alert(todo);
  }
  
  render()
  {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            TOTO LIST
          </h1>
        </header>
        <input ref={this.todoInput}></input>
        <button onClick={this.addTodo}>Add TODO</button>
        <ul>
        {
           this.state.todos.map( (todo,i) => { 
                        return (<li key={i}>{todo}</li>)
                    })
         }
        </ul>
      </div>
    );
  }
}

export default App;
