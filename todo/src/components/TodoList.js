import React, { Component } from 'react';
import ItemMain from './ItemMain';

class TodoList extends Component {
    render() {
        return (
            <div>
                <ItemMain name="Huy" />
                <ItemMain name="Hoa" />
                <ItemMain name="Thom" />
            </div>
        )
    }
}

export default TodoList;