import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import BookedMovies from "../pages/BookedMovies/BookedMovies";
import MovieSummary from "../pages/MovieSummary/MovieSummary";
import UserInfoAdd from "../pages/UserInfoAdd/UserInfoAdd";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/bookedMovies',
        element: <BookedMovies></BookedMovies>
      },
      {
        path: '/movieSummary/:id',
        element: <MovieSummary></MovieSummary>,
        loader: ({ params }) => fetch(`https://api.tvmaze.com/shows/${params.id}`)
      },
      {
        path: '/userInfoAdd/:id',
        element: <UserInfoAdd></UserInfoAdd>,
        loader: ({ params }) => fetch(`https://api.tvmaze.com/shows/${params.id}`)
      }
    ]
  },
]);

export default router;