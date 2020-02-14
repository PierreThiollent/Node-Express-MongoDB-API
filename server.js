// On require le module http de node
var http = require('http');

// On importe notre app express
const app = require('./app');

// On crée un serveur en lui passant l'app express
const server = http.createServer(app);

// On définit le port de l'app
app.set('port', process.env.PORT || 3000);

// On demande au serveur d'écouter sur le port par défaut ou le 3000 si dispo
server.listen(process.env.PORT || 3000);
