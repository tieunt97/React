import React, { Component } from 'react';
import ItemMain from './ItemMain';

class TodoList extends Component {

    render() {
        const { todos, deleteTodo, changeCompleteTodo } = this.props;
        console.log(todos);
        return (
            <div>
                {
                    todos.map((todo, index) => <ItemMain key={todo.id} todo={todo} deleteTodo={deleteTodo} changeCompleteTodo={changeCompleteTodo}/>)
                }
            </div>
        )
    }
}

export default TodoList;