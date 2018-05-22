import React, { Component } from 'react';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';

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
    };

    this.handleToggleForm= this.handleToggleForm.bind(this);
    this.handleCancelSubmit = this.handleCancelSubmit.bind(this);
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

  render() {
    let itemList = this.state.items;
    let isShowForm = this.state.isShowForm;
    let eleForm = null;


    if(isShowForm) {
      eleForm = <Form  onClickCancel= { this.handleCancelSubmit }/>
    }
    return (
      <div>
        <Title />

        <Control 
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
