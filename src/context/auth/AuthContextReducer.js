import { decodeToken, toggleLocalStorage } from "../../utils/jwt";
import {
  AUTHENTICATED,
  ERRORS,
  LOADINGSTATUS,
  LOG_IN,
  LOG_OUT,
  MOVIES,
  FAV_MOVIES,
  REMOVE_FAV_MOVIE,
} from "./actions/AuthContextActions";

function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case LOG_IN: {
      const { token } = payload;
      const user = decodeToken(token);
      toggleLocalStorage(token);
      return { ...state, isAuthenticated: true, user };
    }
    case LOG_OUT: {
      toggleLocalStorage();
      return { ...state, isAuthenticated: false, user: null };
    }

    case AUTHENTICATED: {
      const user = decodeToken(payload);
      return { ...state, isAuthenticated: true, user };
    }

    case MOVIES:
      return { ...state, movies: payload, isLoading: false };
    case ERRORS:
      return { ...state, error: payload, isLoading: false };
    case LOADINGSTATUS:
      return { ...state, isLoading: payload };
    case FAV_MOVIES:
      return { ...state, favMovies: [...state.favMovies, payload] };
    case REMOVE_FAV_MOVIE:
      var updatedFavMovies = state.favMovies.filter(
        (movieId) => movieId !== payload
      );
      return { ...state, favMovies: updatedFavMovies };

    default:
      return state;
  }
}

const initialState = {
  isAuthenticated: false,
  user: null,
  movies: [],
  error: "",
  isLoading: false,
  favMovies: [],
};

export { reducer, initialState };
