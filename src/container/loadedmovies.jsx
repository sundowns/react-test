import { connect } from 'react-redux';
import Movies from '../component/movies.jsx';
import { fetchData } from '../action/fetchdata';

const mapStateToProps = state => {
   return {
      movies: state.movies,
      loading: state.loading
   }
}

const mapDispatchToProps = dispatch => ({
   fetchData: () => dispatch(fetchData())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movies)
