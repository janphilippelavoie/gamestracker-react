import React, { Component } from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

class GameList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            games: []
        }
    }

  componentWillMount() {
    fetch('/api/v1/games')
    .then(response => {
        if (!response.ok) {
            throw response
        }
        return response.json()
    })
    .then(data => {
        this.setState({games: data})
    })
    .catch(err => {
        this.setState({error: err}) 
    })}

  render() {
    return (
        <Paper>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Game</TableCell>
                        <TableCell>Champion</TableCell>
                        <TableCell>#Matches Played</TableCell>
                        <TableCell>#Players</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.state.games.map(game => {
                    return (
                        <TableRow key={game.id}>
                        <TableCell component="th" scope="row">
                            {game.name}
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {game.championName}
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {game.matchesPlayed}
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {game.playerCount}
                        </TableCell>
                        </TableRow>
                    );
                    })}
                </TableBody>
            </Table>
      </Paper>    )
  }
}

export default GameList;
