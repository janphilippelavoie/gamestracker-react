const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
});

app.get('/api/v1/games', (req, res) => {
    let games = [
        {'id': '1', 'name': 'Mage Knight', 'championName': 'JP', 'matchesPlayed': 134, 'playerCount': 23},
        {'id': '2', 'name': 'Keyforge', 'championName': 'Denis', 'matchesPlayed': 94, 'playerCount': 103},
        {'id': '3', 'name': 'Chess', 'championName': 'François', 'matchesPlayed': 1124, 'playerCount': 12},
    ];
    res.send(games);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
