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
    if (text !== '') {
      this.setState(({
        todos: this.state.todos.map((todo) => todo.id === id
          ? { id, name: text, completed: todo.completed } : todo)
      }));
    } else {
      this.setState({ todos: this.state.todos.filter((todo) => todo.id !== id) });
    }
  }

  deleteTodo = (id) => {
    this.setState({ todos: this.state.todos.filter((todo) => todo.id !== id) });
  }

  changeCompleteTodo = (id) => {
    const todos = this.state.todos.map((todo) => todo.id === id
      ? { id, name: todo.name, completed: !todo.completed } : todo);

    this.setState({
      todos
    })
  }

  changeCompleteAllTodo = () => {
    let isCompleted = this.state.todos.filter(({ completed }) => completed);
    if (isCompleted.length < this.state.todos.length) {
      this.setState({ todos: this.state.todos.map(({ id, name }) => ({ id, name, completed: true })) });
    } else {
      this.setState({ todos: this.state.todos.map(({ id, name }) => ({ id, name, completed: false })) });
    }
  }

  getStateHaveCompleted = () => {
    return {
      completedAll: this.state.todos.every(({ completed }) => completed),
      isCompleted: this.state.todos.filter(({ completed }) => completed).length > 0
    };
  }

  clearCompleted = () => {
    this.setState({ todos: this.state.todos.filter(({ completed }) => !completed) })
  }

  render() {
    const { completedAll, isCompleted } = this.getStateHaveCompleted();
    return (
      <div className="App">
        <Header />
        <section id="main">
          <FormInput addTodo={this.addTodo} changeCompleteAllTodo={this.changeCompleteAllTodo}
            completedAll={completedAll} lengthTodos={this.state.todos.length} />
          <MainSection todos={this.state.todos} deleteTodo={this.deleteTodo} clearCompleted={this.clearCompleted}
            changeCompleteTodo={this.changeCompleteTodo} isCompleted={isCompleted} editTodo={this.editTodo} />
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
