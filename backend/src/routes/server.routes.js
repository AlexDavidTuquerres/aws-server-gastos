const express = require('express');
const router = express.Router();

const gastos = require('../controllers/gastos.controllers');
const usuarios = require('../controllers/usuarios.controllers');

router.get('/misitio/gastos', gastos.getGastos);
router.post('/misitio/gastos', gastos.addGasto);

router.get('/misitio/usuarios', usuarios.getUsuario);
router.post('/misitio/usuarios', usuarios.addUsuario);

router.get('/misitio', (req, res) => {
    res.send('Bienvenido al backend de calculo gastos')
})

router.get('/misitio/about', (req, res) => {
    res.send('acerca de mi sitio')
})

router.get('/misitio/gastos',gastos.getGastos);
router.post('/misitio/gastos', gastos.addGasto);
router.get('/misitio/usuarios',usuarios.getUsuario);
router.post('/misitio/usuarios', usuarios.addUsuario);
//router.get('misitio/usuarios/:id',gastos.getUsuario);
//router.put('misitio/usuarios/:id',gastos.editUsuario);
//router.delete('misitio/usuarios/:id', gastos.deleteUsuario);

router.get('/misitio/contacto', (req, res) => {
  res.sendFile('./contacto.jpg', {
    root: __dirname  // o usa path.join si es necesario
  });
});

module.exports = router;