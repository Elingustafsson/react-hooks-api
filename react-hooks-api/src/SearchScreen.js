import React, { Component } from 'react';
import './App.css';
import {Link } from "react-browser-router";



export default class SearchScreen extends Component {
  constructor(props) {
    super()
    this.state = {
      data: []
    }
  }

  render() {
    console.log(this.props.userData);
    const tableRows = this.props.userData.map(user => {
      return (
        <tr key={user.id}>
          <td><Link to={"/user/" + user.id}>{user.id}</Link></td>
          <td><Link to={"/user/" + user.id}>{user.name}</Link></td>
          <td><Link to={"/user/" + user.id}>{user.city}</Link></td>
          <td><Link to={"/user/" + user.id}>{user.country}</Link></td>
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
