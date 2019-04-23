'use strict';

const user = 'dev-altpaca';
const password = 'allpaqas1';
const server = 'ds125616.mlab.com:25616/dev-trendy';

exports.DATABASE_URL = process.env.DATABASE_URL || `mongodb://${user}:${password}@${server}`;
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || 'mongodb://localhost/jwt-auth-demo';
exports.PORT = process.env.PORT || 8085;
exports.JWT_SECRET = process.env.JWT_SECRET || 'allpaqas2019';
exports.JWT_EXPIRY = process.env.JWT_EXPIRY || '7d';
