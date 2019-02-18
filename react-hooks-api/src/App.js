import React, { Component } from 'react';
import SearchScreen from './SearchScreen';
import UserScreen from './UserScreen';
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
      fetch('http://5c63e54bc969210014a32d76.mockapi.io/api/v1/users').then(promise => promise.json())
      .then(data => {
        this.setState({data: data})
      })
  }

  getUserById(id) {
    return this.state.data.filter(a => a.id == id)[0];
  }

  render() {
    return (
      <BrowserRouter>
      <div>
        <Route exact path="/" component={() => <SearchScreen userData={this.state.data} />} />
        <Route exact path="/user/:id" render={(props) => <UserScreen {...props} getUserById={this.getUserById.bind(this)} />} />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
