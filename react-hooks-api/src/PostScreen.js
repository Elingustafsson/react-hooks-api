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
       <p>{comment.name}</p>
       <p>{comment.text}</p>
       <p>{comment.createdAt}</p>
       <hr />
     </div>
   ))
   return (
    <div>
      <h1>Enskild post</h1>
        <p>Skapad: {state.createdAt}</p>
        <p>Antal likes: {state.likes}</p>
        <h2>Titel: {state.title}</h2>
        <h3>{state.text}</h3>
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
