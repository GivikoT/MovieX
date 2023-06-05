import { fetchMovies } from "../api/fetchMovies";
import {
  errorHandler,
  loadingStatus,
  saveMovies,
} from "./actions/AppContextActionsCreators";

export async function handleFetch(dispatch) {
  dispatch(loadingStatus(true));
  fetchMovies()
    .then((data) => dispatch(saveMovies(data)))
    .catch((err) => dispatch(errorHandler(err.message)));
}
