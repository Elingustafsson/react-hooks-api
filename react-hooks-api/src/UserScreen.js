import React, { useState } from 'react';
import './App.css';
import { Redirect, Link } from "react-browser-router";


export default function UserScreen(props) {
  const [userInfo, setUserInfo] = useState(props.getUserById(props.match.params.id))

  function mapUserInfo(getUserById) {
    const userPosts = userInfo.posts.map(post => (
      <Link key={post.id} to={"/user/" + props.match.params.id + "/post/" + post.id}>
        <div>
          <h2>{post.title}</h2>
          <p>{post.text}</p>
        </div>
      </Link>
    ))
    return userPosts
  }

  if (userInfo === undefined) {
    return <Redirect to="/" />
  }
  return (
    <div>
      <p>{userInfo.name}</p>
      <p>{userInfo.city}</p>
      <p>{userInfo.country}</p>
      <img alt="avatar" src={userInfo.avatar}></img>
      <h1>Posts</h1>
      {mapUserInfo()}
    </div>
  )
}
