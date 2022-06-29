import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterRentalsColumnExpectedReturnDate1656521850928
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      "rentals",
      "expect_return_date",
      new TableColumn({
        name: "expected_return_date",
        type: "timestamp",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("rentals", "expected_return_date");
  }
}
