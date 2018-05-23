import React, { Component } from 'react';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';
import { filter, includes, orderBy as funcOrderBy, remove } from 'lodash';

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

      isShowForm : false,
      strSearch  : '',
      orderBy    : 'name',
      orderDir   : 'asc'
    };

    this.handleToggleForm   = this.handleToggleForm.bind(this);
    this.handleCancelSubmit = this.handleCancelSubmit.bind(this);
    this.handleSearch       = this.handleSearch.bind(this);
    this.handleSort         = this.handleSort.bind(this);
    this.handleDelete       = this.handleDelete.bind(this);
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

  handleSort(orderBy, orderDir) {
    this.setState({
      orderBy: orderBy,
      orderDir: orderDir
    })
  }

  handleDelete(id) {
    //console.log(id);
    let items = this.state.items;
    remove(items, (item)=> {
      return item.id === id
    });

    //console.log(items);
    //console.log(this.state.items);

    this.setState({
      items: items
    })
  }

  render() {
    let itemOrigin = this.state.items;
    let itemList = [];
    let isShowForm = this.state.isShowForm;
    let eleForm = null;
    let search = this.state.strSearch;
    let { orderBy, orderDir } = this.state;

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
      return includes(item.name.toLowerCase(), search);
    });

    itemList = funcOrderBy(itemList, [orderBy], [orderDir]);

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
            orderBy = {orderBy}
            orderDir = {orderDir}
            onClickSort = {this.handleSort}
        />
        { eleForm }
        <List 
          itemTodo = {itemList}
          onClickDelete = {this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
