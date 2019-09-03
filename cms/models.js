'use strict';
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const CMSSchema = mongoose.Schema({
    value: {type: Object, default: {}},
    types: {type: Object, default: {}}
});

const CMS = mongoose.model('CMS', CMSSchema);

module.exports = {CMS};
