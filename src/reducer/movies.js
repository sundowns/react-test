import { FETCH_DATA, FETCH_SUCCESS } from '../constants.js';

const movies = (state, action) => {
   switch (action.type) {
      case FETCH_DATA:
         return {
            movies: [],
            loading: true
         }
      case FETCH_SUCCESS:
         return {
            loading: false,
            movies: action.data
         }
      default:
         return state;
   }
}

export default movies
