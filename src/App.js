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
          level: '1'
        }, 
        {
          id: '3',
          name: 'Nodejs',
          level: '0'
        },
        {
          id: '4',
          name: 'Vuejs',
          level: '0'
        }
      ]
    };
  }

  render() {
    let itemList = this.state.items;
    return (
      <div>
        <Title />

        <Control />

        <Form />

        <List itemTodo = {itemList}/>

      </div>
    );
  }
}

export default App;
