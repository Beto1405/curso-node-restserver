const {validationResult} = require('express-validator');


const logger = (req, res, next) => {
    console.log('Peticion de tipo', req.method);
    next();
}

const validarCampos = (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {

        return res.status(400).send(errors);

    }

    next();

}

module.exports = {
    logger,
    validarCampos
}