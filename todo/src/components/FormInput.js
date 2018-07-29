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
        const styles = {
            styleCompletedAll: {
                opacity: 1
            },
            styleUncompletedAll: {
                opacity: 0.2
            },
            styleDisplay: {
                display: 'block'
            },
            styleDisplayNone: {
                display: 'none'
            }
        }

        const { lengthTodos, changeCompleteAllTodo, completedAll } = this.props;

        return (
            <header>
                <button onClick={() => changeCompleteAllTodo()}
                    style={lengthTodos > 0 ? Object.assign({}, styles.styleDisplay, completedAll
                        ? styles.styleCompletedAll : styles.styleUncompletedAll) : styles.styleDisplayNone}>
                    <i className="arrow-down"></i>
                </button>
                <input type="text" placeholder="What needs to be done?"
                    onChange={event => this.setState({ text: event.target.value })}
                    onKeyPress={event => this.handleAddTodo(event)} value={this.state.text} />
            </header>
        )
    }
}

export default FormInput;