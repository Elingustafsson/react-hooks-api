import React, {Component} from 'react';
import './App.css';
import { Redirect, Link } from "react-browser-router";


export default class UserScreen extends Component {
  constructor(props) {
    super()
    this.state = {
      userInfo: props.getUserById(props.match.params.id)
    }
  }

  render() {
    console.log(this.state.userInfo);
    if (this.state.userInfo === undefined) {
      return <Redirect to="/" />
    }

    const userPosts = this.state.userInfo.posts.map(post => (
      <Link key={post.id} to={"/user/" + this.props.match.params.id + "/post/" + post.id}>
        <div>
          <h2>{post.title}</h2>
          <p>{post.text}</p>
        </div>
      </Link>
    ) )
    return (
      <div>
        <p>{this.state.userInfo.name}</p>
        <p>{this.state.userInfo.city}</p>
        <p>{this.state.userInfo.country}</p>
        <img alt="avatar" src={this.state.userInfo.avatar}></img>
        <h1>Posts</h1>
        {userPosts}
      </div>
    );
  }
}
