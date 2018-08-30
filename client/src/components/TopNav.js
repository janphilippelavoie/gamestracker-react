
import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'


class TopNav extends Component {

    constructor(props) {
        super(props)
    }

  render() {
    return (
        <AppBar position="static" color="default">
        <Toolbar>
        <Typography variant="title" color="inherit">
            {this.props.title}
        </Typography>
        </Toolbar>
        </AppBar>
    )}
}

export default TopNav;

