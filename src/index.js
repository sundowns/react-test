import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import App from './App';
import movies from './reducer/movies';
import movieService from './service/movieservice';

const store = createStore(movies, {
   movies: [],
   loading: false
}, applyMiddleware(movieService));

ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>,
   document.getElementById('root')
);
registerServiceWorker();

// store.dispatch({ type: 'FETCH_DATA' });
