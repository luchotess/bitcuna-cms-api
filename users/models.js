'use strict';
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const UserSchema = mongoose.Schema({
    password: {
        type: String,
        required: true
    },
    name: {type: String, default: ''},
    phone: {type: String, default: ''},
    username: {type: String, default: '', required: true},
    type: {type: String, default: 'promotor'},
    note: {type: String, default: ''},
    avatar: {type: String, default: ''},
    events: [{type: mongoose.Schema.Types.ObjectId, ref: 'Event'}],
    event: {type: mongoose.Schema.Types.ObjectId, ref: 'Event'},
    permissions: {}
});

UserSchema.methods.serialize = function () {
    return {
        _id: this._id || '',
        phone: this.phone || '',
        username: this.username || '',
        avatar: this.avatar || '',
        name: this.name || '',
        note: this.note || '',
        type: this.type || '',
        permissions: this.permissions || {},
        event: this.event || {}
    };
};

UserSchema.methods.promotorSerialize = function () {
    return {
        _id: this._id || '',
        phone: this.phone || '',
        username: this.username || '',
        name: this.name || '',
        avatar: this.avatar || '',
        note: this.note || '',
        events: this.events || [],
        permissions: this.permissions || {}
    };
};

UserSchema.methods.puertaSerialize = function () {
    return {
        _id: this._id || '',
        username: this.username || '',
        event: this.event || {}
    };
};

UserSchema.methods.validatePassword = function (password) {
    return bcrypt.compare(password, this.password);
};

UserSchema.statics.hashPassword = function (password) {
    return bcrypt.hash(password, 10);
};

const User = mongoose.model('User', UserSchema);

module.exports = {User};
