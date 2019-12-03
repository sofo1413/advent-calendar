import React from 'react';
import logo from './logo.svg';
import './App.css';
import Calendar from "./Calendar";

function App() {
    return (
        <div className="App">
            <h1>
                Advent Calendar
            </h1>
            <h2>
                count your way to Christmas!
            </h2>
          <Calendar/>
        </div>
    );
  }

export default App;
