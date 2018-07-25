import React, { Component } from 'react';

class ItemMain extends Component {
    render() {
        return (
            <div className="items">
                <div><input type="checkbox" /><label>Huy</label></div>
                <button className="clear">x</button>
            </div>
        )
    }
}

export default ItemMain;