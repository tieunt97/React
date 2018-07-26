import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import FormInput from './components/FormInput';
import MainSection from './components/MainSection';

class App extends Component {
  constructor(props) {
    //super: có thể sd đc this trong hàm constructor
    //super(props): có thể sd đc 
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          name: 'Huy',
          completed: false
        },
        {
          id: 2,
          name: 'Hoa',
          completed: false
        },
        {
          id: 3,
          name: 'Thom',
          completed: false
        }
      ]
    }
  }

  addTodo = (text) => {
    if (text && text.trim() !== '') {
      const newTodo = {
        id: this.state.todos.reduce((newId, todo) => Math.max(newId, todo.id), -1) + 1,
        name: text,
        completed: false
      }
      const todos = [...this.state.todos, newTodo];
      this.setState({ todos });
    }
  }

  editTodo = (id, text) => {

  }

  deleteTodo = (id) => {
    this.setState({ todos: this.state.todos.filter((todo) => todo.id !== id) });
  }

  changeCompleteTodo = (id) => {
    // console.log('todos: ', this.state.todos.map((todo) => todo.id === id ? { id, name: todo.name, completed: !todo.completed } : todo));
    const todos = this.state.todos.map((todo) => todo.id === id ? { id, name: todo.name, completed: !todo.completed } : todo)

    this.setState({
      todos,
    })
    console.log(this.state.todos);
  }
  completeAllTodo = () => {

  }
  render() {
    return (
      <div className="App">
        <Header />
        <section id="main">
          <FormInput addTodo={this.addTodo} />
          <MainSection todos={this.state.todos} deleteTodo={this.deleteTodo} changeCompleteTodo={this.changeCompleteTodo} />
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
