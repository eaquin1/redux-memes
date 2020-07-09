import React from 'react';

import './App.css';
import Form from "./NewMemeForm"
import Meme from "./Meme"

import {useSelector, useDispatch} from "react-redux"

function App() {
  //pull the array of memes from the store
  const memeArray = useSelector(store => store.memes)
  const dispatch = useDispatch();

  const createMeme = (data) => {
    dispatch({ type: "ADD_MEME", meme: data })
  }

  const deleteMeme = (id) => {
    dispatch({type: "REMOVE_MEME", id })
  }

  const memeComponents = memeArray.map(meme => (
    <Meme 
      key={meme.id}
      url={meme.url}
      topText={meme.topText}
      bottomText={meme.bottomText}
      deleteMeme={() => deleteMeme(meme.id)}
      />
  ))


  return (
    <div className="App">
      <h1>MEME GENERATOR</h1>
      <Form createMeme={createMeme}/>
      <hr />
      {memeComponents}
    </div>
  );
}

export default App;
