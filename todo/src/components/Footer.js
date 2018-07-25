import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer id="footer">
                <p>Double-click to edit a todo</p>
                <p>Created by <a href="https://github.com/petehunt/" target="_blank">petehunt</a></p>
                <p>Part of <a href="http://todomvc.com" target="_blank">TodoMVC</a></p>
            </footer>
        )
    }
}

export default Footer;