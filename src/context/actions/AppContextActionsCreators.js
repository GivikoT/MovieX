import {
  LOG_OUT,
  LOG_IN,
  AUTHENTICATED,
  MOVIES,
  ERRORS,
  LOADINGSTATUS,
  FAV_MOVIES,
  REMOVE_FAV_MOVIE,
} from "./AppContextActions";

function logIn(data) {
  return {
    type: LOG_IN,
    payload: data,
  };
}

function logOut() {
  return {
    type: LOG_OUT,
    payload: "",
  };
}

function authenticated(token) {
  return {
    type: AUTHENTICATED,
    payload: token,
  };
}

function saveMovies(payload) {
  return {
    type: MOVIES,
    payload,
  };
}

function errorHandler(payload) {
  return {
    type: ERRORS,
    payload,
  };
}

function loadingStatus(payload) {
  return {
    type: LOADINGSTATUS,
    payload,
  };
}

function favoriteMovie(payload) {
  return {
    type: FAV_MOVIES,
    payload,
  };
}

function removeFavMovie(payload) {
  return {
    type: REMOVE_FAV_MOVIE,
    payload,
  };
}

export {
  logIn,
  logOut,
  authenticated,
  saveMovies,
  errorHandler,
  loadingStatus,
  favoriteMovie,
  removeFavMovie,
};
