import React, { Component } from 'react';
import logo from './logo.svg';
import List from './components/list';
import TodoForm from './components/todoForm';
import './App.css';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      todos: []
    };
  }

  onNewTodo(todo){
    let newTodoList = this.state.todos;
    newTodoList.push(todo);
    this.setState({ todos: newTodoList });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TodoApp V1.0</h1>
        </header>
        <p className="App-intro">
          <TodoForm onNewTodo={this.onNewTodo.bind(this)}/>
          <List todos={this.state.todos}/>
        </p>
      </div>
    );
  }
}

export default App;
