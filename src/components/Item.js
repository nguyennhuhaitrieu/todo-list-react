import React, { Component } from 'react';

class Item extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let item = this.props.item;
        console.log(item);
        return (
            <tr>
                <td className="text-center">{item.id}</td>
                <td>{item.name}</td>
                <td className="text-center"><span className="label label-danger">High</span></td>
                <td>
                    <button type="button" className="btn btn-warning">Edit</button>
                    <button type="button" className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
}

export default Item;