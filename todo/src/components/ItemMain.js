import React, { Component } from 'react';

class ItemMain extends Component {
    render() {
        const { todo, deleteTodo, changeCompleteTodo } = this.props;
        const styleItemChecked = {
            textDecoration: 'line-through',
            opacity: 0.5,
            transition: '0.4s'
        }
        const styItemUnchecked = {
            textDecoration: 'none',
            opacity: 1,
            transition: '0.4s'
        }
        return (
            <div className="items">
                <div><input type="checkbox" onChange={() => { changeCompleteTodo(todo.id) }} checked={todo.completed} />
                    <label onDoubleClick={() => console.log(34324)} style={todo.completed ? styleItemChecked : styItemUnchecked}>{todo.name}</label>
                </div>
                <button className="clear" onClick={() => deleteTodo(todo.id)}></button>
            </div>
        )
    }
}

export default ItemMain;