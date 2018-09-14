import React, { Component } from 'react';
import './App.css';
import LoadedMovies from './container/loadedmovies.jsx';

class App extends Component {
   constructor() {
      super();
      this.state = {
         movies: [],
         loading : false
      }
      this.fetchData = this.fetchData.bind(this);
   }

   fetchData() {
      this.setState({loading: true});

      this.getMoviesFromApiAsync().then((data) => {
         if (data) {
            this.setState({movies: data});
         }

         //Delayed state update as API is too fast to demo loading state
         setTimeout(() => {
            this.setState({loading: false})
         }, 1000);
      }, (err) => {
         this.setState({loading: false});
         console.log(err);
      });
   }

   getMoviesFromApiAsync() {
      return fetch('https://facebook.github.io/react-native/movies.json')
         .then((response) => response.json())
         .then((responseJson) => {
            return responseJson.movies;
         })
         .catch((error) => {
            console.error(error);
         });
   }

   render() {
      return (
         <div className="App">
            <h1>Incredible Movie Listing Service</h1>
            <div className="items-container">
               <div className="fetch-data" onClick={this.fetchData}>Retrieve Movies</div>
               <LoadedMovies />
            </div>
         </div>
      );
   }
}

export default App;
