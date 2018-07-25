import React, { Component } from 'react';

class FormInput extends Component {
    render() {
        return (
            <header>
                <button><i className="arrow-down"></i></button>
                <input type="text" placeholder="What needs to be done?" />
            </header>
        )
    }
}

export default FormInput;