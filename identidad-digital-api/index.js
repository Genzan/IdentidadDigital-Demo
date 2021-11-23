// Carga de Librerias Externas
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const SERVERPORT = 8020;

var rawBodyHandler = function (req, res, buf, encoding) {
  if (buf && buf.length) {
      req.rawBody = buf.toString(encoding || 'utf8');
  }
}

app.use(cors({ allowedHeaders: 'Content-Type, Cache-Control' }));
app.options('*', cors());
app.use(bodyParser.json({ verify: rawBodyHandler }));

// Funciones
app.post('/api/ALGO', async (req, res) => {
  res.status(200).send(s);
});

// run the app server and tunneling service
app.listen(SERVERPORT, () => {
  console.log(`API listening at http://localhost:${SERVERPORT}`)
});