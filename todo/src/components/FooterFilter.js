import React, { Component } from 'react';

class FooterFilter extends Component {
    render() {
        const {todos} = this.props;
        return (
            <footer id="footer-filter">
                <span>{todos.reduce((count, todo) => !todo.completed?count + 1:count, 0)} item left</span>
                <ul>
                    <li><a href="#/">All</a></li>
                    <li><a href="#/active">Active</a></li>
                    <li><a href="#/completed">completed</a></li>
                </ul>
                <button id="clear-completed">Clear completed</button>
            </footer>
        )
    }
}

export default FooterFilter;