import React, { useState } from 'react';
import './App.css';
import { Redirect, Link } from "react-browser-router";

const userinfo = {
  backgroundColor: 'pink'
}


export default function UserScreen(props) {
  console.log(props)
  const [userInfo, setUserInfo] = useState(props.getUserById(props.match.params.id))
  const [latestSorted, setLatestSorted] = useState(undefined)

  function sortByColumn(column) {
    if(latestSorted === column) {
        setLatestSorted(undefined)
        let tmp = userInfo
        tmp.posts = tmp.posts.sort((a,b) => {
          if (a[column] < b[column]) {
            return 1;
          } else {
            return -1;
          }
        })
        setUserInfo(tmp)
    } else {
        setLatestSorted(column)
        let tmp = userInfo
        tmp.posts = tmp.posts.sort((a,b) => {
          if (a[column] > b[column]) {
            return 1;
          } else {
            return -1;
          }
        })
        setUserInfo(tmp)
    }
  }

  function mapUserInfo(getUserById) {
    console.log("user",userInfo.posts);
    const userPosts = userInfo.posts.map(post => (
        <tr key={post.id}>
          <td><Link to={"/user/" + props.match.params.id + "/post/" + post.id}>{post.title}</Link></td>
          <td><Link to={"/user/" + props.match.params.id + "/post/" + post.id}>{post.text}</Link></td>
          <td><Link to={"/user/" + props.match.params.id + "/post/" + post.id}>{post.likes}</Link></td>
          <td><Link to={"/user/" + props.match.params.id + "/post/" + post.id}>{post.createdAt}</Link></td>
        </tr>
    ))
    return userPosts
  }

  if (userInfo === undefined) {
    return <Redirect to="/" />
  }
  return (
    <>
    <div style={userinfo}>
      <p>Name: {userInfo.name}</p>
      <p>City: {userInfo.city}</p>
      <p>Country: {userInfo.country}</p>
      <img alt="avatar" src={userInfo.avatar}></img>
    </div>

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

    </>
  )
}
