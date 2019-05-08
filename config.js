'use strict';

exports.DATABASE_URL = process.env.DATABASE_URL || `mongodb://dev-altpaca:allpaqas1@ds125616.mlab.com:25616/dev-trendy`;
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || 'mongodb://localhost/jwt-auth-demo';
exports.PORT = process.env.PORT || 8089;
exports.JWT_SECRET = process.env.JWT_SECRET || 'allpaqas2019';
exports.JWT_EXPIRY = process.env.JWT_EXPIRY || '7d';
