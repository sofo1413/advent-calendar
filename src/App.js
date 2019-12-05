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
                the holiday countdown
            </h1>
            <img src={tree} />
          <Calendar style={style}/>
        </div>
    );
  }

export default App;
