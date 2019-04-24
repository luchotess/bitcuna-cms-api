'use strict';
const express = require('express');
const {Block} = require('../blocks');
const _ = require('lodash');
const router = express.Router();

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

        if (childBlock.isIterable) {
            if (!result[childBlock.name]) {
                result[childBlock.name] = [];
            }

            if (!result[childBlock.name]) {
                result[childBlock.name] = [];
            }

            result[childBlock.name].push(getBlockFields(childBlock))

        } else {
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
        }
    });

    return result;
}

/**
 * Get content by page
 * */
router.get('/:page', (req, res) => {
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

module.exports = {router};
