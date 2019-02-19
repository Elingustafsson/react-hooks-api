import React, {Component} from 'react';
import './App.css';
import { Redirect } from "react-browser-router";

export default class PostScreen extends Component {
  constructor(props) {
    console.log(props);
    super()
    this.state = {}

    document.body.classList.add('loading')
    fetch("http://5c63e54bc969210014a32d76.mockapi.io/api/v1/users/" + props.match.params.userId + "/posts/" + props.match.params.postId)
    .then(promise => promise.json())
    .then(data => {
      this.setState({data: data})
      document.body.classList.remove('loading')
    })
  }

  render() {
    if (this.state.data === undefined){
      return null
    }

    const comments = this.state.data.comments.map(comment => (
      <div key={comment.id}>
        <p>{comment.name}</p>
        <p>{comment.text}</p>
        <p>{comment.createdAt}</p>
      </div>
    ))

    return (
      <div>
        <h1>{this.state.data.title}</h1>
        <h1>{this.state.data.createdAt}</h1>
        <h1>{this.state.data.text}</h1>
        <h1>{this.state.data.likes}</h1>
        <h1>Kommentarer</h1>
        {comments}
      </div>
    );
  }
}
