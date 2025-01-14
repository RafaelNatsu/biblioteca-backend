import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1736896399526 implements MigrationInterface {
    name = 'Initial1736896399526'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "autor" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "autor"`);
    }

}
