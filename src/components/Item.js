import React, { Component } from 'react';

class Item extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        let item = this.props.item;
        let level = item.level;
        return (
            <tr>
                <td className="text-center">{item.id}</td>
                <td>{item.name}</td>
                <td className="text-center">
                    {level == 0 ? <span className="label label-danger">High</span> : <span className="label label-success">Small</span>}
                </td>
                <td>
                    <button type="button" className="btn btn-warning">Edit</button>
                    <button type="button" className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
}

export default Item;