import React, { Component } from 'react';

class Item extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    showElementLevel(level) {
        let elementLevel = null;
        if(level==1) {
            elementLevel = <span className="label label-info">Medium</span>;
        } 
        else if(level==2) {
            elementLevel = <span className="label label-danger">High</span>;
        } 
        else if (level==0) {
            elementLevel = <span className="label label-default">Small</span>
        }

        return elementLevel;
    }

    render() {
        let item  = this.props.item;
        let levelCustom = item.level;
        let numberList = this.props.indexNumber;
        return (
            <tr>
                <td className="text-center">{ numberList +1 }</td>
                <td>{item.name}</td>
                <td className="text-center">
                    { this.showElementLevel(levelCustom) }
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