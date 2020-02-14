// On require le module http de node
var http = require('http');

// On crée un serveur
const server = http.createServer((req, res) => {
  res.end('Voila la réponse du serveur');
});

// On demande au serveur d'écouter sur le port par défaut ou le 3000 si dispo
server.listen(process.env.PORT || 3000);
