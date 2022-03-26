const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchUser = require('../middleware/fetchuser');

const JWT_SECRET = "qiuwrhdjkfgi"; //jwt secret

//user creat and data validation
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
        let isEmailUsed = await User.findOne({ email: req.body.email });
        // console.log(`<auth.js: ${isEmailUsed}>`);

        if (isEmailUsed) {
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
                    user: {
                        id: user.id
                    }
                }
                const authToken = jwt.sign(data, JWT_SECRET);
                // console.log(authToken)
                // res.json(user)
                res.json({ authToken })
            })
            .catch(err => {
                res.json({ error: err });
            });
    },
);

//login authintication 
router.post(
    '/login',
    [
        body('email', '<email err>').isEmail(),
        body('password', '<pappword empty>').isLength({ min: 1 })
    ],
    async (req, res) => {
        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // check if the email already used
        let isEmailExist = await User.findOne({ email: req.body.email });
        // console.log(`<auth.js: ${isEmailExist.password}>`);

        if (!isEmailExist) {
            return res.status(400).json({ errors: `incrroct login cradintials.` });
        }

        //password match check
        const isPasswordMatched = await bcrypt.compare(req.body.password, isEmailExist.password);

        if (!isPasswordMatched) {
            return res.status(400).json({ errors: `incrroct login cradintials.` });
        }

        //if email and password is correct then return the auth token
        const data = {
            user: {
                id: isEmailExist.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);
        res.json({ authToken })
    },
);


//fetch datas by authenticated users token 
router.post(
    '/getuser',
    fetchUser,
    async (req, res) => {
        try {
            let userId = req.user.id;
            const user = await User.findById(userId).select("-password");
            res.send(user);
        } catch (error) {
            console.log(error.message);
            res.status(500).send("Server connection error")
        }
    }
);

module.exports = router