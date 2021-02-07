"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authConfig = void 0;
exports.authConfig = {
    jwt: {
        secret: process.env.HASH,
        expiresIn: '1d'
    }
};
