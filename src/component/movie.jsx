import React from 'react';

class Movie extends React.Component {
   render() {
      return <li>{this.props.title} <span className="year">({this.props.releaseYear})</span></li>
   }
}

export default Movie;
