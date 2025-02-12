const express = require('express')
const router = express.Router();
const {body} = require('express-validator')


// for validation we use express validator 

router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min: 3}).withMessage
])




module.exports = router;