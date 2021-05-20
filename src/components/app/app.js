import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import {searchMoviesRequest, searchMoviesSuccess, searchMoviesFailure} from "../../redux/movies-reducer";
import Header from "../header/header";
import Search from "../search-panel/search-panel";
import Movie from "../movie/movie";
import Spinner from "../spinner/spinner";

import './app.css';

const App = (props) => {

  const loading = useSelector(state => state.moviesReducer.loading);
  const movies = useSelector(state => state.moviesReducer.movies);
  const errorMessage = useSelector(state => state.moviesReducer.errorMessage);

  const dispatch = useDispatch();

  const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b";

  useEffect(() => {
    fetch(MOVIE_API_URL)
        .then(response => response.json())
        .then(jsonResponse => {
    
        dispatch(searchMoviesSuccess(jsonResponse.Search));
    });
  }, []);

  const search = searchValue => {
    searchMoviesRequest();

    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === "True") {
              dispatch(searchMoviesSuccess(jsonResponse.Search));
        } else {
              dispatch(searchMoviesFailure(jsonResponse.Error));
        }
      });
  };

  return (
    <div className="app">
      <Header text="Movies Search" />
      <Search search={search} />
      <p className="app-intro">Find your favorite movie</p>
      <div className="movies">
        {loading && !errorMessage ? (
          <Spinner/>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          movies.map((movie, index) => (
            <Movie key={`${index}-${movie.Title}`} movie={movie} />
          ))
        )}
      </div>
    </div>
  )
}


export default App;