import { FETCH_DATA } from '../constants.js';
import { fetchDataSuccess, fetchData } from '../action/fetchdata.js';

const movieService = store => next => action => {
   switch(action.type) {
      case FETCH_DATA:
         next(fetchData());
         return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
               //Delayed as its too fast to demo loading state
               setTimeout(() => {
                  next(fetchDataSuccess(responseJson.movies));
               }, 1000);
            })
            .catch((error) => {
               console.error(error);
            });
      default:
         break;
   }
}

export default movieService
