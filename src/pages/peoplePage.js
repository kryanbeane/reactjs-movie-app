import React from "react";
import {useQuery} from 'react-query';
import Spinner from '../components/spinner';
import {getPeople} from '../api/tmdb-api';

const PeoplePage = () => {
    const {data, error, isLoading, isError}  = useQuery('people', getPeople)
    
}

