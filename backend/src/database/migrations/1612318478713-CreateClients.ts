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
              generationStrategy: 'uuid'
            },
            {
              name: 'name',
              type: 'varchar',
              isNullable: false
            }
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('clients')
    }

}
