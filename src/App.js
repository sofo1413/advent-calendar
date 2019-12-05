import React from 'react';
import logo from './logo.svg';
import './App.css';
import Calendar from "./Calendar";
import tree from "./tree.png"

function App() {
    const style = {
        zIndex: 10
    };
    return (
        <div className="App">
            <h1>
                2019 Advent Calendar
            </h1>
            <h2>
                count your way to Christmas!
            </h2>
            <img src={tree} />
          <Calendar style={style}/>
        </div>
    );
  }

export default App;
