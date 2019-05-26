'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const jwtAuth = passport.authenticate('jwt', {session: false});
const {Field} = require('./models');
const _ = require('lodash');
const router = express.Router();
const multer = require('multer');
const jsonParser = bodyParser.json();

router.get('/', (req, res) => {
    Field.find()
        .then(_blocks => res.json(_blocks));
});

router.put('/:id', [jsonParser, jwtAuth], (req, res) => {
    Field.findById(req.params.id)
        .then(_field => {
            _field.values = req.body.values;
            return _field.save();
        })
        .then(_field => {
            res.json(_field);
        });
});

module.exports = {router};
