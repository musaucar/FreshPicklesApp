const {check} = require('express-validator')

const UserValidator = [
    check('name').notEmpty({ignore_whitespace:true}).withMessage('Name area cannot be empty!'),
    check('surname').notEmpty({ignore_whitespace:true}).withMessage('Surname area cannot be empty!'),
    check('email').isEmail().withMessage('Email is not valid').notEmpty({ignore_whitespace:true}).withMessage('Email area cannot be empty!'),
    check('password').isStrongPassword({
        minLength: 6,
        minLowercase:1,
        minNumbers:1,
        minUppercase:1,
        minSymbols:0,
    }).withMessage("Weak password!").isLength({max:20}).withMessage("Password cannot be more than 20.")
]

const UpdateValidator = [
    check('name').notEmpty({ignore_whitespace:true}).withMessage('Name area cannot be empty!'),
    check('surname').notEmpty({ignore_whitespace:true}).withMessage('Surname area cannot be empty!'),
    check('password').isStrongPassword({
        minLength: 6,
        minLowercase:1,
        minNumbers:1,
        minUppercase:1,
        minSymbols:0,
    }).withMessage("Weak password!").isLength({max:20}).withMessage("Password cannot be more than 20.")
]

module.exports = UserValidator, UpdateValidator; 