
const {Router} = require('express');
const { check } = require('express-validator');
const router = Router();
const {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch
} = require('../controllers/usuarios.conroller');
const { validarCampos } = require('../middlewares/validar-campos');


//usamos middlewares para cada ruta individual....

router.get('/', usuariosGet)


router.post('/', [

    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password es obligatorio y [6,10] letras').not().isEmpty().isLength({min: 6,max: 10}),
    check('rol', 'No es un rol permitido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    check('correo', 'El correo no es valido').isEmail(),
    validarCampos

], usuariosPost)


router.put('/', usuariosPut)

router.delete('/', usuariosDelete)

router.patch('/', usuariosPatch)


module.exports = router;