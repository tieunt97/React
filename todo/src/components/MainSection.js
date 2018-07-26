import React, { Component } from 'react';
import TodoList from './TodoList';
import FooterFilter from './FooterFilter';

class MainSection extends Component {
    render() {
        const { todos, deleteTodo, changeCompleteTodo } = this.props;
        return (
            <div>
                <TodoList todos={todos} deleteTodo={deleteTodo} changeCompleteTodo={changeCompleteTodo}/>
                <FooterFilter todos={todos} />
            </div>
        )
    }
}

export default MainSection;