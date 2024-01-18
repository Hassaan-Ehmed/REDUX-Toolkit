import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import {increment, decrement} from './redux/slices/counter'

function App() {

// For Reading Value from Redux Store🏪

// goto my store and grab reducer obj 
//where (I define all reducers ) so {reducer.count}
// reducer.count = reducer{ count: counterSlice }    
     
const count = useAppSelector(state =>  state.count)

//to send values in our store

const dispatch = useAppDispatch()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <h1>Counter: {count}</h1>

        <button
        onClick={()=>dispatch(increment())}
        
        
        >Increment</button>
        <button
        onClick={()=>dispatch(decrement())}
        
        
        >decrement</button>
        
      </header>
    </div>
  );
}

export default App;
