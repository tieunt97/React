import React, { Component } from 'react';

class FooterFilter extends Component {
    render() {
        const styles = {
            styleHaveTodo: {
                display: 'grid'
            },
            styleDisplayNone: {
                display: 'none'
            },
            styleDisplayClearCompleted: {
                display: 'block'
            },
            styleSelected: {
                border: '1px solid rgba(175, 47, 47, 0.2)'
            },
            styleUnselected: {
                border: '1px solid rgba(175, 47, 47, 0)'
            }
        }

        const { todos, isCompleted, clearCompleted, filterTodo, filter } = this.props;
        console.log(todos);
        return (
            <footer id="footer-filter" style={todos.length > 0 ? styles.styleHaveTodo : styles.styleDisplayNone}>
                <span>{todos.reduce((count, todo) => !todo.completed ? count + 1 : count, 0)} item left</span>
                <ul>
                    <li><a href="#/" onClick={() => filterTodo([true, false, false])} style={filter[0]?styles.styleSelected:styles.styleUnselected}>All</a></li>
                    <li><a href="#/active" onClick={() => filterTodo([false, true, false])} style={filter[1]?styles.styleSelected:styles.styleUnselected}>Active</a></li>
                    <li><a href="#/completed" onClick={() => filterTodo([false, false, true])} style={filter[2]?styles.styleSelected:styles.styleUnselected}>completed</a></li>
                </ul>
                <button id="clear-completed" onClick={() => clearCompleted()} style={isCompleted ? styles.styleDisplayClearCompleted : styles.styleDisplayNone}>Clear completed</button>
            </footer>
        )
    }
}

export default FooterFilter;