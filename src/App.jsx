import React, { Component } from 'react';
import './App.css';
import Movie from './component/movie.jsx';

class App extends Component {
   constructor() {
      super();
      this.state = { movies: [], loading : false }
      this.fetchData = this.fetchData.bind(this);
   }

   fetchData() {
      this.setState({loading: true});
      console.log("fetchinggggggggggggggg");

      //TODO: Resolve issue with CORS requests. The correct headers are returned in Post man, why arent they being returned here?
      // this.getMoviesFromApiAsync().then((data) => {
      //    console.log(data);
      //    if (data) {
      //       this.setState({movies: data});
      //    }
      // }, (err) => {
      //    console.log(err);
      // });
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
            <div className="movie">
               <h1>Incredible Movie Listing Service</h1>
               <button onClick={this.fetchData}>Fetch</button>
               {this.state.loading &&
                  <div>Loading...</div>
               }
               {!this.state.loading &&
                  <ul>
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
