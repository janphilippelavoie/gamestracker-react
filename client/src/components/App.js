import React, { Component } from 'react'
import GameList from './GameList'
import CssBaseline from '@material-ui/core/CssBaseline'
import TopNav from './TopNav';
import '../css/App.css'


class App extends Component {

  render() {
    return (
      <React.Fragment>
        <CssBaseline>
          <TopNav title="Games"/>            
          <GameList />
        </CssBaseline>
      </React.Fragment>
    );
  }
}

export default App;
