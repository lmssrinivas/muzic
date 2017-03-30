/**
 * Created by mlingolu on 3/29/17.
 */


import React from 'react';
import {Card,CardTitle} from 'material-ui/Card'
import SearchComponent from './../components/search.component';
import PlayerComponent from './../components/player.component';
import DetailsComponent from './../components/details.component';

const MusicContainer = () =>(

    <div>
        <Card className="container">
            <CardTitle title="Music App" subtitle="Desktop application using Electron - NodeJS - React JS"></CardTitle>
        </Card>
        <SearchComponent/>
        <PlayerComponent/>
        <DetailsComponent/>
    </div>
);

export default MusicContainer