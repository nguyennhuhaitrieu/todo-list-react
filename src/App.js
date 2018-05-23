import React, { Component } from 'react';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';
import {filter, includes} from 'lodash';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        {
          id: '1',
          name: 'Angular',
          level: '0'
        },
        {
          id: '2',
          name: 'Reactjs',
          level: '2'
        }, 
        {
          id: '3',
          name: 'Nodejs',
          level: '0'
        },
        {
          id: '4',
          name: 'Vuejs',
          level: '1'
        }
      ],
      isShowForm: false,
      strSearch: '', 
    };

    this.handleToggleForm   = this.handleToggleForm.bind(this);
    this.handleCancelSubmit = this.handleCancelSubmit.bind(this);
    this.handleSearch       = this.handleSearch.bind(this);
  }

  handleToggleForm() {
    this.setState({
      isShowForm: !this.state.isShowForm
    })
  }

  handleCancelSubmit() {
    this.setState({
      isShowForm: false
    })
  }

  handleSearch(value) {
    this.setState({
      strSearch: value
    })
  }

  render() {
    let itemOrigin = this.state.items;
    let itemList = [];
    let isShowForm = this.state.isShowForm;
    let eleForm = null;
    let search = this.state.strSearch;

    /* viet js thuan
    if(search.length>0) {
      itemOrigin.forEach ((item)=>{
        if(item.name.toLowerCase().indexOf(search) !==-1) {
          itemList.push(item);
        }
      });
    } else {
      itemList = itemOrigin;
    }
    */

    // su dung thu vien loash 
    itemList = filter(itemOrigin, (item) =>{
    return includes(item.name, search);
    });


    if(isShowForm) {
      eleForm = <Form  onClickCancel= { this.handleCancelSubmit }/>
    }
    return (
      <div>
        <Title />
        <Control 
            onClickSearchGo = { this.handleSearch}
            onClickAdd = { this.handleToggleForm}
            isShowForm= { isShowForm }

        />
        { eleForm }
        <List itemTodo = {itemList}/>
      </div>
    );
  }
}

export default App;
