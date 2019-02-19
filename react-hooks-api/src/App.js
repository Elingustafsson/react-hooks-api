import React, { Component } from 'react';
import SearchScreen from './SearchScreen';
import UserScreen from './UserScreen';
import PostScreen from './PostScreen';
import './App.css';
import {
    BrowserRouter,
    Route
} from "react-browser-router";

class App extends Component {

  constructor(props){
    super()
    this.state = {
      data: []
    }
      document.body.classList.add('loading')
      fetch('http://5c63e54bc969210014a32d76.mockapi.io/api/v1/users')
      .then(promise => promise.json())
      .then(data => {
        this.setState({data: data})
        document.body.classList.remove('loading')
      })
  }

  getUserById(id) {
    return this.state.data.filter(a => a.id == id)[0];
  }

  getPostById(userId, postId) {
    let userInfo = this.getUserById(userId)
    console.log(postId);
    console.log("test",userInfo.posts);
    console.log("LALA",userInfo.posts.filter(b => b.id == postId));
    return userInfo.posts.filter(b => b.id == postId)[0]
  }
  //läs mer route https://reacttraining.com/react-router/web/api

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={() => <SearchScreen userData={this.state.data} />} />
          <Route exact path="/user/:id" render={(props) => <UserScreen {...props} getUserById={this.getUserById.bind(this)} />} />
          <Route exact path="/user/:userId/post/:postId" render={(props) => <PostScreen {...props} getPostById={this.getPostById.bind(this)} />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
