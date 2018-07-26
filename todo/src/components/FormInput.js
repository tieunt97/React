import React, { Component } from 'react';

class FormInput extends Component {
    constructor() {
        super();
        this.state = {
            text: ''
        }
    }

    handleAddTodo = (event) => {
        if (event.key === 'Enter') {
            this.props.addTodo(this.state.text);
            this.setState({ text: '' });
        }
    }

    render() {
        console.log(<input />)
        return (
            <header>
                <button><i className="arrow-down"></i></button>
                <input type="text" placeholder="What needs to be done?" onChange={event => this.setState({ text: event.target.value })}
                    onKeyPress={event => this.handleAddTodo(event)} defaultValue={this.state.text} />
            </header>
        )
    }
}

export default FormInput;