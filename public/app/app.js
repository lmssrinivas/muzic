import React from 'react';
import ReactDom from 'react-dom';

import SearchComponent from './components/search.component';
class App extends React.Component {

    render(){
        return (
            <SearchComponent/>
        )
    }
}

ReactDom.render(<App/> , document.getElementById('app'))
