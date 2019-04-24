'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const {Block} = require('./models');
const {Field} = require('../fields');
const _ = require('lodash');
const router = express.Router();
const multer = require('multer');
const jsonParser = bodyParser.json();

router.get('/', (req, res) => {
    Block.find()
        .then(_blocks => res.json(_blocks));
});

/**
 * Get Main populated Blocks with no parents
 * */
router.get('/main', (req, res) => {
    Block.find({parentId: {$exists: false}})
        .populate({
            path: 'childBlocks',
            populate: {
                path: 'childBlocks'
            }
        })
        .then(_blocks => res.json(_blocks));
});


/**
 * Get Main populated Blocks with no parents (with values)
 * */
router.get('/main/values', (req, res) => {
    Block.find({parentId: {$exists: false}})
        .populate({
            path: 'childBlocks fields',
            populate: {
                path: 'childBlocks fields',
                populate: {
                    path: 'childBlocks fields'
                }
            }
        })
        .then(_blocks => res.json(_blocks));
});

/**
 * Create New Block
 * */
router.post('/', jsonParser, (req, res) => {
    const block = new Block(req.body);

    block.save().then(_block => res.json(_block));
});

/**
 * Add a field to a existent Block
 * */
router.post('/:blockId/field', jsonParser, (req, res) => {
    const field = new Field({...req.body, blockId: req.params.blockId});

    field.save()
        .then(_field => _field.saveFieldToBlock()
            .then(_field => res.json(_field)));

});

/**
 * Add a multiple fields to a existent Block
 * */
router.post('/:blockId/fields', jsonParser, (req, res) => {

    let response = [];
    let count = 0;

    function saveNextField () {
        if (count <= (req.body.length - 1)) {
            let field = new Field({...req.body[count], blockId: req.params.blockId});

            field.save()
                .then(_savedField => _savedField.saveFieldToBlock()
                    .then(_savedField => {
                        response.push(_savedField);
                        count++;

                        saveNextField();
                    }));
        } else {
            res.json(response);
        }
    }

    saveNextField ();
});

/**
 * Add a child block to a existent Block
 * */
router.post('/:blockId/block', jsonParser, (req, res) => {
    const childBlock = new Block({...req.body, parentId: req.params.blockId});

    childBlock.save()
        .then(_childBlock => _childBlock.saveChild())
        .then(childBlock => res.json(childBlock));
});

module.exports = {router};
