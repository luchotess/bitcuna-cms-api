'use strict';
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

const databaseUrl = process.env.DATABASE_URL || `mongodb://dev-altpaca:allpaqas1@ds125616.mlab.com:25616/dev-trendy`;

const BlockSchema = mongoose.Schema({
    name: {type: String, default: ''},
    parentId: {type: mongoose.Schema.Types.ObjectId, ref: 'Block'},
    fields: [{type: mongoose.Schema.Types.ObjectId, ref: 'Field'}],
    childBlocks: [{type: mongoose.Schema.Types.ObjectId, ref: 'Block'}],
    isIterable: {type: Boolean}
});

const FieldSchema = mongoose.Schema({
    key: {type: String, default: ''},
    values: {type: Object},
    blockId: {type: mongoose.Schema.Types.ObjectId, ref: 'Block'}
});

const Field = mongoose.model('Field', FieldSchema);

const Block = mongoose.model('Block', BlockSchema);

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
app.get('/:page', (req, res) => {
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

let server;

function runServer(databaseUrl, port = 8080) {

    return new Promise((resolve, reject) => {
        mongoose.connect(databaseUrl, err => {
            if (err) {
                return reject(err);
            }
            server = app.listen(port, () => {
                console.log(`Your app is listening on port ${port}`);
                resolve();
            })
                .on('error', err => {
                    mongoose.disconnect();
                    reject(err);
                });
        });
    });
}

function closeServer() {
    return mongoose.disconnect().then(() => {
        return new Promise((resolve, reject) => {
            console.log('Closing server');
            server.close(err => {
                if (err) {
                    return reject(err);
                }
                resolve();
            });
        });
    });
}

if (require.main === module) {
    runServer(DATABASE_URL).catch(err => console.error(err));
}

module.exports = {app};
