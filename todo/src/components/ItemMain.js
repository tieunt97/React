import React, { Component } from 'react';

class ItemMain extends Component {
    render() {
        return (
            <div className="items">
                <div><input type="checkbox" /><label>{this.props.name}</label></div>
                <button className="clear"></button>
            </div>
        )
    }
}

export default ItemMain;