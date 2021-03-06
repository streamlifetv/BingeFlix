import { connect } from 'react-redux';
import React from 'react';
import MoviePlay from './movie_play';
import { fetchMovies } from '../actions/movie_actions';
import { fetchGenres } from '../actions/genre_actions';
import { logout } from '../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  const movie = state.entities.movies[ownProps.match.params.movieId];
  return {
    movie,
    loading: state.ui.loading.moviesLoading
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchMovie: id => dispatch(fetchMovies(id))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(MoviePlay);
