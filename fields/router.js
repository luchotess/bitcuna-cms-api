'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const {Field} = require('./models');
const _ = require('lodash');
const router = express.Router();
const multer = require('multer');
const jsonParser = bodyParser.json();

router.get('/', (req, res) => {
    Field.find()
        .then(_blocks => res.json(_blocks));
});

module.exports = {router};
