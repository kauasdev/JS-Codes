import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCategories1656947797324 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // "subir" a migrationas

    await queryRunner.createTable(
      new Table({
        name: "categories",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar", // varchar == string
          },
          {
            name: "description",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp", // timestamp == Date
            default: "now()", // horário atual da inserção
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // "desfazer" a migrations

    await queryRunner.dropTable("categories");
  }
}
