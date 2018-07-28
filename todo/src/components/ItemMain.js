import React, { Component } from 'react';

class ItemMain extends Component {

    onDoubleClick = (id, styles) => {
        const items = document.getElementById(id);
        const listChildItems = items.childNodes;
        items.style.padding = styles.styleItemsDisplayInput.padding;
        listChildItems[0].style.display = styles.styleDisplayNone.display;
        listChildItems[1].style.display = styles.styleDisplayBlock.display;
        // console.log(listChildItems);
    }
    
    // onChangeValue = (id, event) => {
    //     this.props.editTodo(id, text);
    // }

    render() {
        const { todo, deleteTodo, changeCompleteTodo, editTodo } = this.props;
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
            },
            styleDisplayNone: {
                display: 'none'
            },
            styleDisplayGrid: {
                display: 'grid'
            },
            styleItemsDisplayInput: {
                padding: '0 10px 0 36px',
            },
            styleItemsDisplayNoneInput: {
                padding: '12px 15px',
            },
            styleDisplayBlock: {
                display: 'block'
            }
        }

        return (
            <div className="items" id={id}>
                <div>
                    <input type="checkbox" onChange={() => { changeCompleteTodo(id) }} checked={completed} />
                    <label onDoubleClick={() => this.onDoubleClick(id, styles)} style={completed ? styles.styleItemChecked : styles.styItemUnchecked}>{name}</label>
                    <button className="clear" onClick={() => deleteTodo(id)}></button>
                </div>
                <input type="text" className="edit" />
            </div>
        )
    }
}

export default ItemMain;