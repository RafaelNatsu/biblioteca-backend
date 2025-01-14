import { MigrationInterface, QueryRunner } from "typeorm";

export class AddBirthday1736896921487 implements MigrationInterface {
    name = 'AddBirthday1736896921487'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_autor" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "birth_date" date NOT NULL)`);
        await queryRunner.query(`INSERT INTO "temporary_autor"("id", "name") SELECT "id", "name" FROM "autor"`);
        await queryRunner.query(`DROP TABLE "autor"`);
        await queryRunner.query(`ALTER TABLE "temporary_autor" RENAME TO "autor"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "autor" RENAME TO "temporary_autor"`);
        await queryRunner.query(`CREATE TABLE "autor" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "autor"("id", "name") SELECT "id", "name" FROM "temporary_autor"`);
        await queryRunner.query(`DROP TABLE "temporary_autor"`);
    }

}
