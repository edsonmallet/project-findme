import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateServicesOrders1612319348029 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
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
        })
      )

      await queryRunner.createForeignKey('services_orders',
        new TableForeignKey({
            name: 'ServiceOrderClient',
            columnNames: ['client_id'],
            referencedTableName: 'clients',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        }),
      )

      await queryRunner.createForeignKey('services_orders',
        new TableForeignKey({
            name: 'ServiceOrderUser',
            columnNames: ['user_id'],
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
        }),
      )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('services_orders')
    }

}
