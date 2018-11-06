import React, { Component } from 'react'
import GameList from './GameList'
import CssBaseline from '@material-ui/core/CssBaseline'
import TopNav from './TopNav';
import '../css/App.css'
import { Route, Switch } from 'react-router-dom'


class App extends Component {

  state = {
      currentPage: 'games'
  }

  render() {
    const { currentPage } = this.state
    return (
      <React.Fragment>
        <CssBaseline>
          <TopNav title='Projet react de simple devops'/>           
          <Switch>
            <Route path='/games' component={GameList} />
            {/* <Route path='/matches' component={MatchList} /> */}
          </Switch>
        </CssBaseline>
      </React.Fragment>
    )
  }
}

export default App
