import React from "react";
import Show from "../showCard";
import Grid from "@material-ui/core/Grid";

const ShowList = ({tvshows, action}) => {
    let movieCards = tvshows.map((m) => (
        <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Show key={m.id} tv={m} action={action}/>
        </Grid>
    ));
    return movieCards;
};

export default ShowList;