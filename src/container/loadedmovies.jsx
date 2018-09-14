import { connect } from 'react-redux';
import Movies from '../component/movies.jsx';

const mapStateToProps = state => {
   return {
      movies: state.movies,
      loading: state.loading
   }
}

const mapDispatchToProps = dispatch => ({
  toggleLoading: id => dispatch({type: 'TOGGLE_LOADING'})
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movies)
