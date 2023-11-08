import React from 'react';
import logo from './logo.svg';
import './App.css';
// import {NewComponent} from "./NewComponent";
import {topCars} from "./home-work-01/TopCars";
import {NewComponent} from "./home-work-01/NewComponent";

function App() {
  return (
    <div className="App">
        {/*<NewComponent cars={topCars}/>*/}
      <NewComponent car={topCars}/>
    </div>
  );
}

export default App;
