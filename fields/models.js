'use strict';
const mongoose = require('mongoose');
const {Block} = require('../blocks/models');

mongoose.Promise = global.Promise;

const FieldSchema = mongoose.Schema({
    key: {type: String, default: ''},
    values: {type: Object},
    blockId: {type: mongoose.Schema.Types.ObjectId, ref: 'Block'}
});

/**
 * Add fieldId to block when creating a new field
 * */
FieldSchema.methods.saveFieldToBlock = function addFieldToBlock() {
    return Block.findById(this.blockId)
        .then(_block => {
            _block.fields = [..._block.fields, this._id];
            _block.save();
            return this;
        });
};

const Field = mongoose.model('Field', FieldSchema);

module.exports = {Field};
