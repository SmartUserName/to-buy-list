import React, { Component } from 'react';
import '../../App.css';
import { Header } from '../Header/Header.js';
import { Table } from '../Table/Table.js';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            list: []
        };
        this.updateList = this.updateList.bind(this);
        this.onDismiss = this.onDismiss.bind(this);
    }

    updateList(newItem){
        this.setState(prevState => ({
          list: [...prevState.list, newItem],
        }))
    }

    onDismiss(id){
        const updatedList = this.state.list.filter( (item, index) => {
           return id !== index ;
        });

        this.setState({
            list: [...updatedList]
        });
    }


  render() {
    const { list } = this.state;

    return (
      <div className="App">
          <Header updateList={this.updateList}  />
          <Table list={list} onDismiss={this.onDismiss} />
      </div>
    );
  }
}

export default App;
