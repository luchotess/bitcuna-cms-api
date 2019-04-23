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

function getBlockFields (block) {
    const result = {};

    block.fields.forEach((field) => {
        result[field.key] = field.values;
    });

    return result;
}

function getChildBlocksAndFields (block) {
    let result = {};

    block.childBlocks.forEach((childBlock) => {

        let resultChild = getBlockFields(childBlock);

        childBlock.childBlocks.forEach((childChildBlock) => {

            if (childChildBlock.isIterable) {
                if (!resultChild[childChildBlock.name]) {
                    resultChild[childChildBlock.name] = [];
                }

                resultChild[childChildBlock.name].push(getBlockFields(childChildBlock))
            } else {
                resultChild[childChildBlock.name] = getBlockFields(childChildBlock);
            }
        });

        result[childBlock.name] = resultChild;
    });

    return result;
}

/**
 * Get content by page
 * */
router.get('/page/:page', (req, res) => {
    Block.findOne({parentId: {$exists: false}, name: req.params.page})
        .populate({
            path: 'childBlocks fields',
            populate: {
                path: 'childBlocks fields',
                populate: {
                    path: 'childBlocks fields'
                }
            }
        })
        .then(_block => {

            // Get Parent Block Fields
            let result = getBlockFields(_block);

            result = {...result, ...getChildBlocksAndFields(_block)};

            res.json(result)
        }).catch(err => res.json('page not found'));
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

    field.save(req.params.blockId)
        .then(_field => _field.saveFieldToBlock()
            .then(_field => res.json(_field)));

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
