import { FETCH_DATA, FETCH_SUCCESS } from '../constants';

export const fetchData = () => {
   return {
      type: FETCH_DATA
   }
}

export const fetchDataSuccess = data => {
   return {
      type: FETCH_SUCCESS,
      data
   }
}
