import React from 'react';
import PropTypes from 'prop-types';
import Loader from './loader.jsx';
import Movie from './movie.jsx';

const Movies = ({ movies, fetchData, loading }) => {
   return (
      <div className="items-container">
         <div className="fetch-data" onClick={() => fetchData()}>Retrieve Movies</div>
         {movies.length > 0 &&
            <ul className="movie-list">
               {movies.map(function(m) {
                  return <Movie title={m.title} releaseYear={m.releaseYear} key={m.id}/>
               })}
            </ul>
         }
         {loading &&
            <Loader/>
         }
      </div>
   )
}

Movies.propTypes = {
   movies: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      releaseYear: PropTypes.string.isRequired
   }).isRequired).isRequired,
   fetchData: PropTypes.func.isRequired,
   loading: PropTypes.bool.isRequired
}

export default Movies;
