import React, {useState} from "react";

export const ShowsContext = React.createContext(null);

const ShowsContextProvider = (props) => {
    const [myReviews, setMyReviews] = useState({})
    const [favorites, setFavorites] = useState([])
    const [mustWatch, setMustWatch] = useState([])

    const addToFavorites = (tv) => {
        setFavorites([...favorites, tv.id])
    };

    const removeFromFavorites = (tv) => {
        setFavorites(favorites.filter(
            (tvId) => tvId !== tv.id
        ))
    };

    const addToWatchList = (tv) => {
        setMustWatch([...mustWatch, tv.id])
    };

    const removeFromWatchList = (tv) => {
        setMustWatch(mustWatch.filter(
            (tvId) => tvId !== tv.id
        ))
    };

    const addReview = (tv, review) => {
        setMyReviews({...myReviews, [tv.id]: review})
    };

    return (
        <ShowsContext.Provider
            value={{
                favorites,
                addToFavorites,
                removeFromFavorites,
                mustWatch,
                addToWatchList,
                removeFromWatchList,
                addReview,
            }}
        >
            {props.children}
        </ShowsContext.Provider>
    );
};

export default ShowsContextProvider;