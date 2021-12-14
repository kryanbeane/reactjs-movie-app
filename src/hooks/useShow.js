import { useEffect, useState } from "react";
import {getShow} from '../api/tmdb-api'

const useShow = id => {
    const [tv, setShow] = useState(null);
    useEffect(() => {
        getShow(id).then(tv => {
            setShow(tv);
        });
    }, [id]);
    return [tv, setShow];
};

export default useShow