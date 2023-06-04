import AuthGuard from "../Guards/AuthGuard";
import {
  HOME,
  SIGN_UP,
  MOVIES,
  MOVIE_DETAIL,
  SIGN_IN,
  FAVORITE_MOVIES,
} from "../constants/routes";
import pages from "../pages";
import GuestGuard from "../Guards/GuestGuard";

export const routes = [
  { id: 1, path: HOME, element: pages.Home, guard: AuthGuard },
  { id: 2, path: SIGN_UP, element: pages.SignUp, guard: GuestGuard },
  { id: 3, path: SIGN_IN, element: pages.SignIn, guard: GuestGuard },
  { id: 4, path: MOVIES, element: pages.Movies, guard: AuthGuard },
  { id: 5, path: MOVIE_DETAIL, element: pages.MovieDetail, guard: AuthGuard },
  {
    id: 7,
    path: FAVORITE_MOVIES,
    element: pages.FavoriteMovies,
    guard: AuthGuard,
  },
  { id: 8, path: "*", element: pages.Error },
];
