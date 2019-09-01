// Import the model for 'Entrega'
const Entrega = require('../models/Entrega.js');

const express = require('express');
const router = express.Router();

// Import middleware classes
const checkAuth = require('../middleware/check-auth');
const notFound = require('../middleware/not-found');

// List of all 'Entrega' saved
let db = {};
let sequence = 0;

// GET the size of db
router.get('/size', (request, response) => {
  const size = Object.keys(db).length;
  response.json(size);
});

// POST: Create a 'Entrega'
router.post('/', checkAuth,  (request, response) => {
  
  const idPedido = ++sequence;
  const idCliente = request.body.idCliente;
  const nomeRecebedor = request.body.nomeRecebedor;
  const cpfRecebedor = request.body.cpfRecebedor;
  const isComprador = request.body.isComprador;
  const dataHoraEntrega = request.body.dataHoraEntrega;
  const localização = request.body.localização;

  // Crete new 'Entrega'
  const entrega = new Entrega(idPedido, idCliente, nomeRecebedor,
        cpfRecebedor, isComprador, dataHoraEntrega, localização);
  
  // Add the 'Entrega' in the list
  db[idPedido] = entrega;

  response.status(201).json(entrega);
});

//GET: Retrieve all 'Entrega'
router.get('/', (request, response) => {
  const toArray = key => db[key];
  const entregas = Object.keys(db).map(toArray);
  entregas && entregas.length
    ? response.json(entregas)
    : response.status(204).end();
});

//GET: Retrieve a 'Entrega' by id
router.get('/:idPedido', (request, response) => {
  const entrega = db[request.params.idPedido];
  entrega
    ? response.json(entrega)
    : notFound(request, response);
});

//PATCH: Update a 'Entrega' by id
router.patch('/:idPedido', checkAuth, (request, response) => {
  const entrega = db[request.params.idPedido];

  if(entrega) {
    entrega.idCliente = request.body.idCliente || entrega.idCliente;
    entrega.nomeRecebedor = request.body.nomeRecebedor || entrega.nomeRecebedor;
    entrega.cpfRecebedor = request.body.cpfRecebedor || entrega.cpfRecebedor;
    entrega.isComprador = request.body.isComprador || entrega.isComprador;
    entrega.dataHoraEntrega = request.body.dataHoraEntrega || entrega.dataHoraEntrega;
    entrega.localização = request.body.localização || entrega.localização;

    response.json(entrega);
  } else {
    notFound(request, response);
  }
});

//DELETE: Delete a 'Entrega'
router.delete('/:idPedido', checkAuth, (request, response) => {
  const entrega = db[request.params.idPedido];
  if(entrega) {
    delete db[entrega.idPedido];
    response.status(200).end();
  } else {
    notFound(request, response);
  }
});

module.exports = router;