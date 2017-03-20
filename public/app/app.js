import React from 'react';
import ReactDom from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import SignUpContainer from './containers/signup.container';
import LoginContainer from './containers/login.container';
import Base from './components/base.component';
import HomeComponent from './components/home.component';

import '../css/app.scss';


import AppRoutes from './routes';

class App extends React.Component {

    render(){
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <Router>
                    <div>
                        <Base/>
                        <Route exact path='/' component={HomeComponent}/>
                        <Route exact path='/signup' component={SignUpContainer}/>
                        <Route exact path='/login' component={LoginContainer}/>
                    </div>
                </Router>
            </MuiThemeProvider>

        )
    }
}

injectTapEventPlugin();


ReactDom.render(<App/> , document.getElementById('app'));

