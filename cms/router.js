'use strict';
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const passport = require('passport');
const jwtAuth = passport.authenticate('jwt', {session: false});
const {CMS} = require('./models');

const multer = require('multer');

const profilesStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});

const uploadProfilesAvatar = multer({storage: profilesStorage}).single('photo');

router.post('/v2/images', (req, res) => {
    let path = '';

    uploadProfilesAvatar(req, res, function (err) {
        if (err) {
            // An error occurred when uploading
            console.log(err);
            return res.status(422).send(err)
        }
        // No error occured.
        path = req.file.path;
        console.log(req.file);
        return res.send("Upload Completed for " + path);
    });
});

router.get('/v2', (req, res) => {
    CMS.findOne({_id: '5cee0d1a26b2ee278c891f75'})
        .then(response => res.json(response.value));
});

router.put('/v2', [jsonParser, jwtAuth], (req, res) => {
    CMS.findOne({_id: '5cee0d1a26b2ee278c891f75'})
        .then(cms => {
            cms.value = req.body.value;

            return cms.save();
        })
        .then(cms => res.json(cms.value));
});

router.get('/v2/types', [jsonParser, jwtAuth], (req, res) => {
    CMS.findOne({_id: '5cee0d1a26b2ee278c891f75'})
        .then(cms => res.json(cms.types));
});

router.put('/v2/types', [jsonParser, jwtAuth], (req, res) => {
    CMS.findOne({_id: '5cee0d1a26b2ee278c891f75'})
        .then(cms => {
            cms.types = req.body;

            return cms.save();
        })
        .then(cms => res.json(cms.types));
});

module.exports = {router};
