import React, { useState } from 'react';
import './App.css';
import { Redirect, Link } from "react-browser-router";

const userScreen = {
  display: 'flex',
  flexDirection: 'column'
}

const userBox = {
  display: 'flex',
  flexDirection: 'row',
}

const userinfo = {
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '10px'
}


export default function UserScreen(props) {
  const [userInfo, setUserInfo] = useState(props.getUserById(props.match.params.id))
  const [latestSorted, setLatestSorted] = useState(undefined)

  function sortByColumn(column) {
    if(latestSorted === column) {
        setLatestSorted(undefined)
        userInfo.posts.sort((a,b) => {
          if (a[column] < b[column]) {
            return 1;
          } else {
            return -1;
          }
        })
        setUserInfo(userInfo)
    } else {
        setLatestSorted(column)
        userInfo.posts.sort((a,b) => {
          if (a[column] > b[column]) {
            return 1;
          } else {
            return -1;
          }
        })
        setUserInfo(userInfo)
    }
  }

  function mapUserInfo(getUserById) {
    const userPosts = userInfo.posts.map(post => (
        <tr key={post.id}>
          <td><Link to={"/user/" + props.match.params.id + "/post/" + post.id}>{post.title}</Link></td>
          <td><Link to={"/user/" + props.match.params.id + "/post/" + post.id}>{post.text}</Link></td>
          <td><Link to={"/user/" + props.match.params.id + "/post/" + post.id}>{post.likes}</Link></td>
          <td><Link to={"/user/" + props.match.params.id + "/post/" + post.id}>{post.createdAt.slice(0,10)}</Link></td>
        </tr>
    ))
    return userPosts
  }

  if (userInfo === undefined) {
    return <Redirect to="/" />
  }
  return (
    <div style={userScreen}>
      <div style={userBox}>
        <div>
          <img alt="avatar" src={userInfo.avatar}></img>
        </div>
        <div style={userinfo}>
          <p>Name: {userInfo.name}</p>
          <p>City: {userInfo.city}</p>
          <p>Country: {userInfo.country}</p>
        </div>
      </div>

      <h3>Post from {userInfo.name}</h3>
      <table>
        <thead>
          <tr>
            <th onClick={() => sortByColumn("title")}>Title</th>
            <th onClick={() => sortByColumn("text")}>Text</th>
            <th onClick={() => sortByColumn("likes")}>Likes</th>
            <th onClick={() => sortByColumn("createdAt")}>Created at</th>
          </tr>
        </thead>
        <tbody>
          {mapUserInfo()}
        </tbody>
      </table>
    </div>
  )
}
