'use strict';
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const BlockSchema = mongoose.Schema({
    name: {type: String, default: ''},
    parentId: {type: mongoose.Schema.Types.ObjectId, ref: 'Block'},
    fields: [{type: mongoose.Schema.Types.ObjectId, ref: 'Field'}],
    childBlocks: [{type: mongoose.Schema.Types.ObjectId, ref: 'Block'}]
});

BlockSchema.methods.saveChild = function() {
    return this.model('Block').findById(this.parentId)
        .then(_parentBlock => {
            _parentBlock.childBlocks = [..._parentBlock.childBlocks, this._id];
            _parentBlock.save();
            return this;
        })
};

const Block = mongoose.model('Block', BlockSchema);

module.exports = {Block};
