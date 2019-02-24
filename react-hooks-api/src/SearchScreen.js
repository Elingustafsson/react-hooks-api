import React, { Component } from 'react';
import './App.css';
import { Link } from "react-browser-router";



export default class SearchScreen extends Component {
  constructor(props) {
    super()
    this.state = {
      userData: props.userData,
      //Att göra:
      //mappa om alla id från string till number.
      latestSorted: undefined
    }
  }


  sortByColumn(column) {
    if(this.state.latestSorted === column) {
      this.setState({
        latestSorted: undefined,
        userData: this.state.userData.sort((a,b) => {
          if (a[column] < b[column]) {
            return 1;
          } else {
            return -1;
          }
        })
      })
    } else {
      this.setState({
        latestSorted: column,
        userData: this.state.userData.sort((a,b) => {
          if (a[column] > b[column]) {
            return 1;
          } else {
            return -1;
          }
        })
      })
    }
  }

  render() {
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

    //https://stackoverflow.com/questions/44375407/how-to-make-a-table-in-reactjs-sortable
    //Kunna klicka på <th> och när man gör det så ska vi gå in i userData, sortera den efter vald <th> och rendera om den.

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th onClick={() => this.sortByColumn("name")}>name</th>
              <th onClick={() => this.sortByColumn("city")}>city</th>
              <th onClick={() => this.sortByColumn("country")}>country</th>
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
