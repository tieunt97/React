import React, { Component } from 'react';
import ItemMain from './ItemMain';

class TodoList extends Component {

    render() {
        const { todos, deleteTodo, changeCompleteTodo, editTodo } = this.props;
        return (
            <div>
                {
                    todos.map((todo) => <ItemMain key={todo.id} todo={todo} deleteTodo={deleteTodo}
                        changeCompleteTodo={changeCompleteTodo} editTodo={editTodo} />)
                }
            </div>
        )
    }
}

export default TodoList;