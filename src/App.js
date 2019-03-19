import React, { Component } from 'react';
import './App.css';
import "babel-polyfill"
import "isomorphic-fetch"
import Table from './component/Table'
class App extends Component {
  state = {
    dataIntable:[],
    dataColumn: [
      {
        title: "Name",
        dataIndex: "name",
        rowKey: "name",
        width: 150
      },
      {
        title: "Age",
        dataIndex: "age",
        rowKey: "age",
        width: 100
      },
      {
        title: "Address",
        dataIndex: "address",
        rowKey: "address"
      },
      {
        title: "Address 2",
        dataIndex: "address2",
        rowKey: "address2"
      },
      {
        title: "Address 3",
        dataIndex: "address3",
        rowKey: "address3"
      },
      {
        title: "Address 4",
        dataIndex: "address4",
        rowKey: "address4"
      },
      {
        title: "Address 5",
        dataIndex: "address5",
        rowKey: "address5"
      },
      {
        title: "Address 6",
        dataIndex: "address6",
        rowKey: "address6"
      },
    ]
  }
  getData(){
    const data = [];
    for (let i = 0; i < 100; i++) {
      data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
        address2: `Second line of address no. ${i}`,
        address3: `Third line of address no. ${i}`,
        address4: `Third line of address no. ${i}`,
        address5: `Third line of address no. ${i}`,
        address6: `Third line of address no. ${i}`
      });
    }
    return data
  }
  render() {
    return (
      <div className="App">
        <Table column={this.state.dataColumn} data={this.getData()} defaultPageSize={8}/>
      </div>
    );
  }
}

export default App;
