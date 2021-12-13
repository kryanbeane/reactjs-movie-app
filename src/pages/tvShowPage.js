import React from "react";
import PageTemplate from "../components/movies/templateMovieListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getShows} from '../api/tmdb-api'

const TVShowPage = () => {
    const {data, error, isLoading, isError}  = useQuery('discover', getShows)

    if (isLoading) return <Spinner/>
    if (isError) return <h1>{error.message}</h1>
    const shows = data.results;
    return (
        <PageTemplate
            title="Discover TV Shows"
            movies={shows}
            action={() => {}}
        />
    );
};
export default TVShowPage;