const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = "qiuwrhdjkfgi";

router.post(
    '/creatuser',
    [
        body('name').isLength({ min: 3 }),
        body('email', '<email err>').isEmail(),
        body('password').isLength({ min: 3 })
    ],
    async (req, res) => {
        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // check if the email already used
        let isEmailUsed = await User.findOne({email: req.body.email});
        // console.log(`<auth.js: ${isEmailUsed}>`);

        if(isEmailUsed){
            return res.status(400).json({ errors: `Use different email.` });
        }

        //hashing the password
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);

        User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass,
        })
            .then(user => {
                const data = {
                    user:{
                        id: user.id
                    }
                }
                const authToken = jwt.sign(data, JWT_SECRET);
                // console.log(authToken)
                // res.json(user)
                res.json({authToken})
            })
            .catch(err => {
                res.json({ error: err });
            });
    },
);

module.exports = router