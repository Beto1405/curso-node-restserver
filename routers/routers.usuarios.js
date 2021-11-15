
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
const role = require('../models/role');
const { isRoleValido,  isemailUsuariosBD,  isusUariobyId } = require('../helpers/db-validators');


//usamos middlewares para cada ruta individual....

router.get('/', usuariosGet)


router.post('/', [

    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password es obligatorio y [6,10] letras').not().isEmpty().isLength({min: 6,max: 10}),
    check('correo','El correo ya existe').custom((correo)=>isemailUsuariosBD(correo)),//dentro de custom va un callback!!!!
    check('correo', 'El correo no es valido').isEmail(),
    check('rol').custom(isRoleValido), // estoy funciona porque el argumento que enviamos tiene el mismo nombre que el argumento qeu recibe la funcion referenciada por isRoleValido
    validarCampos

], usuariosPost)
router.put('/:id',
    [
        check('id', 'El id no es un id de Mongo').isMongoId(),
        check('id', 'El Id no existe en Mongo').custom(isusUariobyId),
        check('correo', 'El correo ya existe').custom((correo) => isemailUsuariosBD(correo)), //dentro de custom va un callback!!!!
        check('rol').custom(isRoleValido), // estoy funciona porque el argumento que enviamos tiene el mismo nombre que el argumento qeu recibe la funcion referenciada por isRoleValido

        validarCampos
    ], usuariosPut)

router.delete('/:id',

    [
        check('id', 'El id no es un id de Mongo').isMongoId(),
        check('id', 'El Id no existe en Mongo').custom(isusUariobyId),
    ],
    usuariosDelete)

router.patch('/', usuariosPatch)


module.exports = router;