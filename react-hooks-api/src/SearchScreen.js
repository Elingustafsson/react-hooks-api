import React, { useState } from 'react';
import './App.css';
import { Link } from "react-browser-router";


export default function SearchScreen(props) {
  console.log(props)
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
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th onClick={() => sortByColumn("name")}>name</th>
              <th onClick={() => sortByColumn("city")}>city</th>
              <th onClick={() => sortByColumn("country")}>country</th>
            </tr>
          </thead>
          <tbody>
            {mapUser()}
          </tbody>
        </table>
      </div>
    );
  }
