import React, {useState, useEffect} from 'react';
import SearchScreen from './SearchScreen';
import UserScreen from './UserScreen';
import PostScreen from './PostScreen';
import Header from './Header';
import './App.css';
import {
    BrowserRouter,
    Route
} from "react-browser-router";


export default function App() {
  const [data, setData] = useState([])
  //Om man vill ha fler saker i "state"
  // const [dataState, dataStateFunc] = useState({
  //   data: []
  // })
  useEffect(() => {
    document.body.classList.add('loading')
    fetch('http://5c63e54bc969210014a32d76.mockapi.io/api/v1/users')
    .then(promise => promise.json())
    .then(value => {
      setData(value)
      document.body.classList.remove('loading')
    })
  }, [])


  function getUserById(id) {
    return data.filter(a => a.id == id)[0];
  }

  return (
    <BrowserRouter>
      <div>
        <Route path="/" component={Header}/>
        {/*<Route exact path="/" component={() => SearchScreen(data)} />*/}
        <Route exact path="/" component={() => <SearchScreen userData={data} />} />
        <Route exact path="/user/:id" render={(props) => <UserScreen {...props} getUserById={getUserById} />} />
        <Route exact path="/user/:userId/post/:postId" render={(props) => <PostScreen {...props} />} />
      </div>
    </BrowserRouter>
  );
}
