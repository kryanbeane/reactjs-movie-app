import React, {useContext} from "react";
import PageTemplate from "../components/movies/templateMovieListPage";
import {MoviesContext} from "../contexts/moviesContext";
import {useQueries} from "react-query";
import {getMovie} from "../api/tmdb-api";
import Spinner from '../components/spinner'

const PlaylistMoviesPage = () => {
    const {watchList: movieIds} = useContext(MoviesContext);

    const watchListMovieQueries = useQueries(
        movieIds.map((movieId) => {
            return {
                queryKey: ["movie", {id: movieId}],
                queryFn: getMovie,
            };
        })
    );

    const isLoading = watchListMovieQueries.find((m) => m.isLoading === true);
    if (isLoading) return <Spinner/>;
    const movies = watchListMovieQueries.map((q) => q.data);

    return (
        <PageTemplate
            title="Your Must Watch"
            movies={movies}
            action={() => {
                return (
                    <>

                    </>
                );
            }}
        />

    );
};


export default PlaylistMoviesPage;