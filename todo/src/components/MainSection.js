import React, { Component } from 'react';
import TodoList from './TodoList';
import FooterFilter from './FooterFilter';

class MainSection extends Component {
    render() {
        return (
            <div>
                <TodoList />
                <FooterFilter />
            </div>
        )
    }
}

export default MainSection;