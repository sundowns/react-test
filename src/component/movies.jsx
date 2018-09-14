import React from 'react';
import Loader from './loader.jsx';
import Movie from './movie.jsx';

class Movies extends React.Component {
   render() {
      if (!this.props.loading && this.props.movies.length > 0) {
         return <ul className="movie-list">
            {this.props.movies.map(function(m) {
               return <Movie title={m.title} releaseYear={m.releaseYear} key={m.id}/>
            })}
         </ul>
      } else if (this.props.loading) {
         return <Loader/>
      } else {
         return null;
      }
   }
}

export default Movies;
