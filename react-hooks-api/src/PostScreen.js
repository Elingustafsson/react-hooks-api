import React, {Component} from 'react';
import './App.css';
import { Redirect } from "react-browser-router";

export default class PostScreen extends Component {
  constructor(props) {
    console.log(props);
    super()

    let test = props.getPostById(props.match.params.userId, props.match.params.postId)
    console.log(props.match.params.postId);
    console.log(props.match.params.userId);
    //Måste göra ett nytt API-anropp. Finns ej kommentarer.
    //Behöver detta: http://5c63e54bc969210014a32d76.mockapi.io/api/v1/users/3/posts/3
  }

  render() {
    return (
      <div>hej</div>
    );
  }
}
