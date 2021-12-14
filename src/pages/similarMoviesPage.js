import React from "react";
import { withRouter } from "react-router-dom";
import PageTemplate from "../components/movies/templateMovieListPage";
import { useQuery } from 'react-query'
import {getMovie, getSimilar} from '../api/tmdb-api'
import AddToPlaylistIcon from '../components/cardIcons/addToPlaylist'

const SimilarMoviesPage = (props) => {
    const {id} = props.match.params
    
    return (
        <PageTemplate
            title="Similar Movies"
            movies={similar}
            action={(movie) => {
                return <AddToPlaylistIcon movie={movie} />
            }}
        />
    );
};
export default withRouter(SimilarMoviesPage);