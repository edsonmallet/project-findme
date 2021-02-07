"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrder = void 0;
const typeorm_1 = require("typeorm");
const Client_1 = require("./Client");
const User_1 = require("./User");
let ServiceOrder = class ServiceOrder {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], ServiceOrder.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ServiceOrder.prototype, "problem", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ServiceOrder.prototype, "client_id", void 0);
__decorate([
    typeorm_1.OneToOne(() => Client_1.Client),
    typeorm_1.JoinColumn({ name: 'client_id' }),
    __metadata("design:type", Client_1.Client)
], ServiceOrder.prototype, "client", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ServiceOrder.prototype, "user_id", void 0);
__decorate([
    typeorm_1.OneToOne(() => User_1.User),
    typeorm_1.JoinColumn({ name: 'user_id' }),
    __metadata("design:type", User_1.User)
], ServiceOrder.prototype, "user", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ServiceOrder.prototype, "latlng", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ServiceOrder.prototype, "status", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], ServiceOrder.prototype, "created_at", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], ServiceOrder.prototype, "update_at", void 0);
ServiceOrder = __decorate([
    typeorm_1.Entity('services_orders')
], ServiceOrder);
exports.ServiceOrder = ServiceOrder;
