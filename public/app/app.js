import React from 'react';
import ReactDom from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { hashHistory,browserHistory, Router } from 'react-router';

import routes from './router';

class App extends React.Component {

    render(){
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <Router history={hashHistory} routes={routes} />

                {/*<SearchComponent/>*/}
                {/*<DetailsComponent title={'Track title'}/>*/}

                {/*<PlayerComponent/>*/}
                {/*<LoginComponent/>*/}
            </MuiThemeProvider>

        )
    }
}

injectTapEventPlugin();


ReactDom.render(<App/> , document.getElementById('app'));

