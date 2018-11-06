import React, { Component } from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import { IconButton, withStyles, Menu, MenuItem } from '@material-ui/core'
import { Link } from 'react-router-dom'

const styles = {
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    link: {
        textDecoration: 'none'
    }
  }
  
class HamburgerMenu extends Component {
  
  state = {
    anchorElement: null,
  }

  openMenu = event => {
    this.setState({ anchorElement: event.currentTarget })
  }

  handleClose = (event, route) => {
      if (route) {
          alert('route!')
      }
      this.setState({ anchorElement: null })
  }

  render() {
    const { anchorElement } = this.state
    const { classes } = this.props

    return (
      <div>
        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon onClick={this.openMenu}/>
        </IconButton>
        <Menu
          id="app-menu"
          anchorEl={anchorElement}
          open={Boolean(anchorElement)}
          onClose={this.handleClose}
        >
            <MenuItem onClick={() => this.handleClose(event, '/games')}>Games</MenuItem>
            <MenuItem onClick={() => this.handleClose(event, '/matches')}>Matches</MenuItem>
        </Menu>
      </div>
    )
  }
}

export default withStyles(styles)(HamburgerMenu)
