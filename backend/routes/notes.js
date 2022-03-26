const express = require('express');
const router = express.Router();
const Notes = require('../models/Notes');
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const fetchUser = require('../middleware/fetchuser');

//add note for auth user 
router.post(
    '/addnote',
    fetchUser,
    [
        body('title', 'title must be atlist 3 char').isLength({ min: 3 }),
        body('description', 'description must be atlist 3 char').isLength({ min: 3 })
    ],
    async (req, res) => {
        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // if title and desc are not empty then creat a note
        try {
            Notes.create({
                user: req.user.id,
                title: req.body.title,
                description: req.body.description,
                tag: req.body.tag
            })
                .then(note => {
                    res.json(note)
                })
                .catch(err => {
                    res.json({ error: err });
                });
        } catch (error) {
            console.log(error.message);
            res.status(500).send("Server connection error")
        }
    }
);

//displat all notes of authinticate user
router.get(
    '/allnotes',
    fetchUser,
    async (req, res) => {
        try {
            Notes.find({
                user: req.user.id
            })
                .then(note => {
                    // console.log(note);
                    if (!note.length) {
                        return res.send("You have not created any note yet.");
                    }
                    res.json(note);
                })
                .catch(err => {
                    res.json({ error: err });
                });
        } catch (error) {
            console.log(error.message);
            res.status(500).send("Server connection error")
        }
    }
);




module.exports = router