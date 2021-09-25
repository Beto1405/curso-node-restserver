
const {Router} = require('express');
const router = Router();
const { usuariosGet, usuariosPost, usuariosPut, usuariosDelete, usuariosPatch } = require('../controllers/usuarios.conroller');




router.get('/',usuariosGet)


router.post('/',usuariosPost)


router.put('/', usuariosPut)

router.delete('/', usuariosDelete)

router.patch('/', usuariosPatch)


 module.exports = router;