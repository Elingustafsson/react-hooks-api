import React, {Component} from 'react';
import './App.css';

export default class UserScreen extends Component {
  constructor(props) {
    super()
    this.state = {
      hej: props.getUserById(props.match.params.id)
    }
  }

  render() {
    console.log(this.state.hej);
    return (
      <p>{this.state.hej.id}</p>
    );
  }
}
