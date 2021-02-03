"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateServicesOrders1612319348029 = void 0;
const typeorm_1 = require("typeorm");
class CreateServicesOrders1612319348029 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "services_orders",
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'gen_random_uuid()'
                },
                {
                    name: 'problem',
                    type: 'text',
                    isNullable: false
                },
                {
                    name: 'client_id',
                    type: 'uuid',
                    isNullable: true
                },
                {
                    name: 'user_id',
                    type: 'uuid',
                    isNullable: true
                },
                {
                    name: 'latlng',
                    type: 'json',
                    isNullable: true
                },
                {
                    name: 'created_at',
                    type: 'timestamp with time zone',
                    isNullable: false,
                    default: 'now()'
                },
                {
                    name: 'update_at',
                    type: 'timestamp',
                    default: 'now()'
                }
            ]
        }));
        await queryRunner.createForeignKey('services_orders', new typeorm_1.TableForeignKey({
            name: 'ServiceOrderClient',
            columnNames: ['client_id'],
            referencedTableName: 'clients',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        }));
        await queryRunner.createForeignKey('services_orders', new typeorm_1.TableForeignKey({
            name: 'ServiceOrderUser',
            columnNames: ['user_id'],
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('services_orders');
    }
}
exports.CreateServicesOrders1612319348029 = CreateServicesOrders1612319348029;
