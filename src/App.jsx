import React, { Component } from 'react';
import './App.css';
import Loader from './component/loader.jsx';
import Movie from './component/movie.jsx';

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
         }, 1200);
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
               <Loader loading={this.state.loading}/>
               {!this.state.loading && this.state.movies.length > 0 &&
                  <ul className="movie-list">
                     {this.state.movies.map(function(m) {
                        return <Movie title={m.title} releaseYear={m.releaseYear} key={m.id}/>
                     })}
                  </ul>
               }

            </div>
         </div>
      );
   }
}

export default App;
