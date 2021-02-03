"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const uuid_1 = require("uuid");
class User {
    constructor(props, id) {
        Object.assign(this, props);
        if (!id) {
            this.id = uuid_1.v4();
        }
    }
}
exports.User = User;
