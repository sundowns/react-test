import React from 'react';

class Loader extends React.Component {
   constructor(props) {
      super(props);
      this.state = { ellipses: '' }
   }

   componentDidMount() {
      this.timerID = setInterval(() => this.tick(), 400);
   }

   tick() {
      this.setState({ellipses: this.state.ellipses + '.'});
      if (this.state.ellipses.length > 3) {
         this.setState({ellipses: ''});
      }
   }

   render() {
      if (this.props.loading) {
         return <div className="loader">Loading{this.state.ellipses}</div>
      } else {
         return null;
      }
   }
}

export default Loader;
