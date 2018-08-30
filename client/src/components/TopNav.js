
import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Paper from '@material-ui/core/Paper'
import {color2} from '../palette'


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
        'background-color': color2
    }
};


class TopNav extends Component {

    

  render() {
    const { classes } = this.props
    return (
        <AppBar position="static" >
            <Paper>
            <Toolbar className={classes.appBar}>
                <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="title" color="inherit">
                    {this.props.title}
                </Typography>
            </Toolbar>
            </Paper>
        </AppBar>
    )}
}

export default withStyles(styles)(TopNav);

