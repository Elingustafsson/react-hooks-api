import React, { useState, useEffect } from 'react';
import './App.css';

export default function PostScreen(props) {
  const [state, setState] = useState(undefined)


  useEffect(() => {
    document.body.classList.add('loading')
    fetch("http://5c63e54bc969210014a32d76.mockapi.io/api/v1/users/" + props.match.params.userId + "/posts/" + props.match.params.postId)
    .then(promise => promise.json())
    .then(data => {
      data.comments.sort((a, b) => {
        if(a.createdAt < b.createdAt) {
          return 1;
        } else {
          return -1;
        }
      })
      setState(data)
      document.body.classList.remove('loading')
    })
  }, [])


  function mapComments() {
   if(state === undefined) {
     return null;
   }
   const comments = state.comments.map(comment => (
     <div key={comment.id}>
       <p>Date: {comment.createdAt.slice(0,10)}</p>
       <p>Author: {comment.name}</p>
       <p>{comment.text}</p>
       <hr />
     </div>
   ))
   return (
    <div>
      <p>Skapad: {state.createdAt.slice(0,10)}</p>
      <p>Antal likes: {state.likes}</p>
      <h1>{state.title}</h1>
      <h3>{state.text}</h3>
      <hr />
      <h2>Kommentarer</h2>
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
