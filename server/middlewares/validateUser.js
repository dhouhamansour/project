const {body, validationResult}= require('express-validator')
exports.validateUser =[body('fullname').isAlpha(),
body('email').isEmail(),
body('password').isLength({min :5})]


