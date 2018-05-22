import React, { Component } from 'react';

class Control extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };

    this.handleAdd = this.handleAdd.bind(this);
  }
  
  handleAdd () {
    this.props.onClickAdd();
  }
  render() {
    //console.log(this.props.isShowForm);

    let elmButton  = <button onClick= { this.handleAdd } type="button" className="btn btn-info btn-block">Add Task</button>
    if(this.props.isShowForm === true) {
      elmButton= <button onClick= { this.handleAdd } type="button" className="btn btn-success btn-block">Close Form</button>
    }

    return (
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div className="input-group">
              <input type="text" className="form-control" ref="search" placeholder="Search for..." />
              <span className="input-group-btn">
                <button  className="btn btn-info" type="button">Go!</button>
              </span>
            </div>
          </div>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <div className="dropdown">
              <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                Sort by <span className="caret"></span>
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                <li><a role="button">Name ASC</a></li>
                <li><a role="button">Name DESC</a></li>
                <li role="separator" className="divider"></li>
                <li><a role="button">Level ASC</a></li>
                <li><a role="button">Level DESC</a></li>
              </ul>
              <span className="label label-success label-medium">NAME - DESC</span>
            </div>
			    </div>
          <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
            { elmButton }
			    </div>
        </div>
    );
  }
}

export default Control;
