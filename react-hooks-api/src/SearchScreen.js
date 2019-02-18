import React, { Component } from 'react';
import './App.css';



export default class SearchScreen extends Component {
  constructor(props) {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    fetch('http://5c63e54bc969210014a32d76.mockapi.io/api/v1/users').then(promise => promise.json())
    .then(data => {
      this.setState({data: data})
    })
  }
  render() {
    console.log(this.state.data);
    var tableRows = this.state.data.map(user => {
      return (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.city}</td>
          <td>{user.country}</td>
        </tr>
      )
    })
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>id</td>
              <td>name</td>
              <td>city</td>
              <td>country</td>
            </tr>
          </thead>
          <tbody>
          {tableRows}
          </tbody>
        </table>
      </div>
    );
  }
}
