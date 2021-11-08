import React, {useContext} from "react";
import {MoviesContext} from "../../contexts/moviesContext";
import IconButton from "@material-ui/core/IconButton";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";

const AddToPlaylistIcon = ({movie}) => {
    const context = useContext(MoviesContext);
    const handleAddWatchlist = (e) => {
        e.preventDefault();
        context.addToWatchList(movie);
    };
    return (
        <IconButton aria-label="Add to WatchList" onClick={handleAddWatchlist}>
            <PlaylistAddIcon color="primary" fontSize="large"/>
        </IconButton>
    );
};

export default AddToPlaylistIcon;