import React, { useState } from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import {QueryClientProvider, QueryClient} from "react-query";
import {ReactQueryDevtools} from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import TrendingMoviesPage from "./pages/trendingMoviesPage";
import NowPlayingPage from "./pages/nowPlayingPage";
import MustWatchPage from "./pages/mustWatchPage";
import Dashboard from '../src/components/user/dashboard/Dashboard';
import Preferences from '../src/components/user/preferences/Preferences';
import Login from '../src/components/user/login/Login';
import useToken from './useToken';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 360000,
            refetchInterval: 360000,
            refetchOnWindowFocus: false
        },
    },
});

const App = () => {
    const { token, setToken } = useToken();
    
    if(!token) return <Login setToken={setToken}/>
    
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <SiteHeader/>
                <MoviesContextProvider>
                    {" "}
                    <Switch>
                        <Route exact path="/reviews/form" component={AddMovieReviewPage}/>
                        <Route exact path="/movies/upcoming" component={UpcomingMoviesPage}/>
                        <Route exact path="/movies/trending" component={TrendingMoviesPage}/>
                        <Route exact path="/reviews/:id" component={MovieReviewPage}/>
                        <Route exact path="/movies/favorites" component={FavoriteMoviesPage}/>
                        <Route exact path="/movies/must-watch" component={MustWatchPage}/>
                        <Route exact path="/movies/now-playing" component={NowPlayingPage}/>
                        <Route exact path="/movies/:id" component={MoviePage}/>
                        <Route exact path="/" component={HomePage}/>
                        <Route path="/dashboard" component={Dashboard}/>
                        <Route path="/preferences" component={Preferences}/>
                        <Redirect from="*" to="/"/>
                    </Switch>
                </MoviesContextProvider>
            </BrowserRouter>
            <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
    );
};

ReactDOM.render(<App/>, document.getElementById("root"));