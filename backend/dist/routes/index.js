"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const users_routes_1 = require("./users.routes");
const router = express_1.Router();
exports.router = router;
router.use('/users', users_routes_1.usersRoutes);
