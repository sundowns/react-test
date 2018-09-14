import React from 'react';

class Loader extends React.Component {
   constructor(props) {
      super(props);
      this.state = { ellipses: '' }
   }

   componentDidMount() {
      this._mounted = true;
      this.timerID = setInterval(() => this.tick(), 400);
   }

   componentWillUnmount() {
      this._mounted = false;
   }

   tick() {
      if (this._mounted) {
         this.setState({ellipses: this.state.ellipses + '.'});
         if (this.state.ellipses.length > 3) {
            this.setState({ellipses: ''});
         }
      }
   }

   render() {
      return <div className="loader">Loading{this.state.ellipses}</div>
   }
}

export default Loader;
