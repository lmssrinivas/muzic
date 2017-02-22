import React from 'react';
import ReactDom from 'react-dom';

import SearchComponent from './components/search.component';
import DetailsComponent from './components/details.component';
import PlayerComponent from './components/player.component';


class App extends React.Component {

    render(){
        return (
            <div>
                <SearchComponent/>
                <DetailsComponent title={'Track title'}/>

                <PlayerComponent/>
            </div>
        )
    }
}

ReactDom.render(<App/> , document.getElementById('app'))
