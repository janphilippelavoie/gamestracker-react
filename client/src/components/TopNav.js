
import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import HamburgerMenu from './HamburgerMenu'
import * as palette from '../palette'



const styles = {
    root: {
      flexGrow: 1,
    },
    flex: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    appBar: {
        'background-color': palette.mainBold
    }
};


class TopNav extends Component {

  openMenu() {
      alert('click')
  }

  render() {
    const { classes } = this.props
    return (
        <AppBar position="static" >
            <Paper>
            <Toolbar className={classes.appBar}>
                <HamburgerMenu />
                <Typography variant="title" color="inherit">
                    {this.props.title}
                </Typography>
            </Toolbar>
            </Paper>
        </AppBar>
    )}
}

export default withStyles(styles)(TopNav);

