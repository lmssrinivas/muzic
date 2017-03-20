/**
 * Created by mlingolu on 3/15/17.
 */

import React from 'react';
import {Card,CardTitle} from 'material-ui/Card'
import SearchComponent from './search.component';
import PlayerComponent from './player.component';
import DetailsComponent from './details.component';

const HomeComponent = () =>(

    <div>
        <Card className="container">
            <CardTitle title="Music App" subtitle="Desktop application using Electron - NodeJS - React JS"></CardTitle>
        </Card>
        <SearchComponent/>
        <PlayerComponent/>
        <DetailsComponent/>
    </div>
);

export default HomeComponent