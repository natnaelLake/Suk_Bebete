import { body } from 'express-validator';


const createAdminValidator = ()=>[
    body('email').notEmpty().withMessage('Email Is Required.'),
    body('email').isEmail().withMessage('Enter Valid Email'),
    body('password').notEmpty().withMessage('Password Is Required.'),
]

export {
    createAdminValidator
}

