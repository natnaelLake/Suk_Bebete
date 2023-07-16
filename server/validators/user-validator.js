import {body} from 'express-validator';

const createUserValidator = ()=>[
    body('name').notEmpty().withMessage('Name Is Required.'),
    body('phone').notEmpty().withMessage('Phone Number Is Required. '),
    body('phone').isMobilePhone().withMessage('Enter Valid Phone Number. '),
    body('amount').isInt().withMessage('Enter Amount Of Products. '),
    body('address').notEmpty().withMessage('Enter Valid Address. '),
    body('email').isEmail().optional().withMessage('Enter Valid Email. ')
]


export {
    createUserValidator
}