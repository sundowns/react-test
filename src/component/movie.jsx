import React from 'react';

class Movie extends React.Component {
   render() {
      return <li>{this.props.title} <strong>({this.props.releaseYear})</strong></li>
   }
}

export default Movie;
