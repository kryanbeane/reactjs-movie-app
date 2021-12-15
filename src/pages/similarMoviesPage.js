import React from "react";
import { withRouter } from "react-router-dom";
import PageTemplate from "../components/movies/templateMovieListPage";
import { useQuery } from 'react-query';
import {getSimilar} from '../api/tmdb-api';
import AddToPlaylistIcon from '../components/cardIcons/addToPlaylist';

const SimilarMoviesPage = (movieId) => {
    const {data: similar} = useQuery('similar', getSimilar(movieId))
    
    return (
        <PageTemplate
            movies={similar}    
            title="Similar Movies"
            action={(movie) => {
                return <AddToPlaylistIcon movie={movie} />
            }}
        />
    );
};
export default withRouter(SimilarMoviesPage);