import React, { Component } from 'react';

class ItemMain extends Component {
    constructor(props) {
        super(props);
        this.state = { todo: this.props.todo.name }
    }

    onDoubleClick = (id) => {
        const items = document.getElementById(id);
        const [div, input] = items.childNodes;
        items.style.padding = '0 10px 0 36px';
        div.style.display = 'none';
        input.style.display = 'block';
        //set focus into input text
        input.focus();
        input.setSelectionRange(this.state.todo.length, this.state.todo.length);
    }

    handleKeyPress = (event, id) => {
        if (event.key === 'Enter') {
            this.handleChangeTodo(id);
        }
    }

    handleChangeTodo = (id) => {
        const name = this.state.todo.trim();
        this.props.editTodo(id, name);
        const items = document.getElementById(id);
        const [div, input] = items.childNodes;
        items.style.padding = '12px 15px';
        div.style.display = 'grid';
        input.style.display = 'none';
        this.setState({ todo: name });
    }

    render() {
        const { todo, deleteTodo, changeCompleteTodo } = this.props;
        const { id, name, completed } = todo;

        const styles = {
            styleItemChecked: {
                textDecoration: 'line-through',
                opacity: 0.5,
                transition: '0.4s'
            },
            styItemUnchecked: {
                textDecoration: 'none',
                opacity: 1,
                transition: '0.4s'
            }
        }

        return (
            <div className="items" id={id}>
                <div>
                    <input type="checkbox" onChange={() => { changeCompleteTodo(id) }} checked={completed} />
                    <label onDoubleClick={() => this.onDoubleClick(id, styles)}
                        style={completed ? styles.styleItemChecked : styles.styItemUnchecked}>{name}</label>
                    <button className="clear" onClick={() => deleteTodo(id)}></button>
                </div>
                <input type="text" className="edit" value={this.state.todo} onChange={(event) =>
                    this.setState({ todo: event.target.value })} onKeyPress={(event) =>
                        this.handleKeyPress(event, id)} onBlur={() => this.handleChangeTodo(id)} />
            </div>
        )
    }
}

export default ItemMain;