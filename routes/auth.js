var express = require('express')
var router = express.Router();
const { check, validationResult } = require('express-validator');
const {signout, signup, signin , isSignedIn} = require("../controllers/auth");// for importing from auth.js controllers

router.post("/signup" , [ // checking valadition
    check('name').isLength({min: 3}).withMessage(' name must be at least 5 chars long'),
    check('email').isEmail().withMessage('email is required'),
    check('password').isLength({min: 3}).withMessage('password should be at least 3 char')
],


 signup);
 router.post('/signin' , [ 

    check("email").isEmail().withMessage('email is required'),
    check('password').isLength({min: 1}).withMessage('password field is required')


],


 signin);
router.get('/signout', signout);




module.exports = router;