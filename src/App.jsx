import React, { Component } from 'react';
import './App.css';
import LoadedMovies from './container/loadedmovies.jsx';

class App extends Component {
   render() {
      return (
         <div className="App">
            <h1>Incredible Movie Listing Service</h1>
            <LoadedMovies />
         </div>
      );
   }
}

export default App;
