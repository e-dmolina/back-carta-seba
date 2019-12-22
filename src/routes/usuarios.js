const { Router } = require('express');
const router = Router();
const { getUsuarios, createUsuario, getUsuario, updeteUsuario, deleteUsuario } = require('../controllers/usuarios.controller');

router.route('/')
    .get(getUsuarios)
    .post(createUsuario)

router.route('/:id')
    .get(getUsuario)
    .put(updeteUsuario)
    .delete(deleteUsuario);



module.exports = router;