import React, { useState, useEffect } from 'react';
import './App.css';

export default function PostScreen(props) {
  const [state, setState] = useState({})


  useEffect(() => {
    document.body.classList.add('loading')
    fetch("http://5c63e54bc969210014a32d76.mockapi.io/api/v1/users/" + props.match.params.userId + "/posts/" + props.match.params.postId)
    .then(promise => promise.json())
    .then(data => {
      setState({data: data})
      document.body.classList.remove('loading')
    })
  }, [])


  function mapComments() {
   if(state.data === undefined) {
     return null;
   }
   const comments = state.data.comments.map(comment => (
     <div key={comment.id}>
       <p>{comment.name}</p>
       <p>{comment.text}</p>
       <p>{comment.createdAt}</p>
       <hr />
     </div>
   ))
   return (
    <div>
    <h1>Enskild post</h1>
      <p>Skapad: {state.data.createdAt}</p>
      <p>Antal likes: {state.data.likes}</p>
      <h2>Titel: {state.data.title}</h2>
      <h3>{state.data.text}</h3>
      <h1>Kommentarer</h1>
      {comments}
    </div>
   )
 }
  return (
    <div>
      {mapComments()}
    </div>
  )
}
