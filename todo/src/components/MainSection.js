import React, { Component } from 'react';
import TodoList from './TodoList';
import FooterFilter from './FooterFilter';

class MainSection extends Component {
    constructor() {
        super();
        this.state = {
            filter: [true, false, false]
        }
    }

    filterTodo = (filter) => {
        this.setState({ filter });
    }

    getTodos = (todos) => {
        let filterTodo = this.state.filter;
        if (filterTodo[0]) {
            return todos;
        } else if (filterTodo[1]) {
            return todos.filter((todo) => !todo.completed);
        } else {
            return todos.filter((todo) => todo.completed);
        }
    }

    render() {
        const { todos, deleteTodo, changeCompleteTodo, isCompleted, clearCompleted, editTodo } = this.props;
        return (
            <div>
                <TodoList todos={this.getTodos(todos)} deleteTodo={deleteTodo}
                    changeCompleteTodo={changeCompleteTodo} editTodo={editTodo} />
                <FooterFilter todos={todos} isCompleted={isCompleted} clearCompleted={clearCompleted}
                    filterTodo={this.filterTodo} filter={this.state.filter} />
            </div>
        )
    }
}

export default MainSection;