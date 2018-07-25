import React, { Component } from 'react';

class FooterFilter extends Component {
    render() {
        return (
            <footer id="footer-filter">
                <span>1 item left</span>
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