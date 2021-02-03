import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateClients1612318478713 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "clients",
          columns: [
            {
              name: 'id',
              type: 'uuid',
              isPrimary: true,
              generationStrategy: 'uuid',
              default: 'gen_random_uuid()'
            },
            {
              name: 'name',
              type: 'varchar',
              isNullable: false
            },
            {
              name: 'created_at',
              type: 'timestamp',
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
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('clients')
    }

}
