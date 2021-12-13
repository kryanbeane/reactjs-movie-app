import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getShows} from '../api/tmdb-api'
import AddToPlaylistIcon from '../components/cardIcons/addToPlaylist'

const TVShowsPage = (props) => {
    const {data, error, isLoading, isError}  = useQuery('discover', getShows)

    if (isLoading) return <Spinner/>
    if (isError) return <h1>{error.message}</h1>
    const shows = data.results;

    const favorites = shows.filter(m => m.favorite)
    localStorage.setItem('favorites', JSON.stringify(favorites))

    const mustWatch = shows.filter(m => m.mustWatch)
    localStorage.setItem('mustWatch', JSON.stringify(mustWatch))

    return (
        <PageTemplate
            title="Discover TV Shows"
            movies={shows}
            action={(show) => {
                return <AddToPlaylistIcon movie={show} />
            }}
        />
    );
};
export default TVShowsPage;