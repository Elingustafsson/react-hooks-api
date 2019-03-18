import React, { useState } from 'react';
import './App.css';
import { Link } from "react-browser-router";


export default function SearchScreen(props) {
  const [userData, setUserData] = useState(props.userData)
  const [latestSorted, setLatestSorted] = useState(undefined)


  function sortByColumn(column) {
    if(latestSorted === column) {
        setLatestSorted(undefined)
        setUserData(userData.sort((a,b) => {
          if (a[column] < b[column]) {
            return 1;
          } else {
            return -1;
          }
        }))
    } else {
        setLatestSorted(column)
        setUserData(userData.sort((a,b) => {
          if (a[column] > b[column]) {
            return 1;
          } else {
            return -1;
          }
        }))
    }
  }

  function mapUser() {
    const tableRows = userData.map(user => (
        <tr key={user.id}>
          <td><Link to={"/user/" + user.id}>{user.id}</Link></td>
          <td><Link to={"/user/" + user.id}>{user.name}</Link></td>
          <td><Link to={"/user/" + user.id}>{user.city}</Link></td>
          <td><Link to={"/user/" + user.id}>{user.country}</Link></td>
        </tr>
      )
    )
    return tableRows
  }

    return (
      <div>
        <h3>Click on each heading to sort after name, city, country</h3>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th onClick={() => sortByColumn("name")}>Name</th>
              <th onClick={() => sortByColumn("city")}>City</th>
              <th onClick={() => sortByColumn("country")}>Country</th>
            </tr>
          </thead>
          <tbody>
            {mapUser()}
          </tbody>
        </table>
      </div>
    );
  }
