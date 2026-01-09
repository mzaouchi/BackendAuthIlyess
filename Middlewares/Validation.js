const { body, validationResult } = require('express-validator');

exports.validSignUp = [
    body("email", "Not a valid email").isEmail(),
    body("password", "Your password must contain 8 char").isLength({min : 8})
]


exports.validSignIn  = [
    body("email", "Not a valid email").isEmail()
]

exports.Validation=(req, res, next)=>{
    var errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).send(errors)
    }

    next()
}