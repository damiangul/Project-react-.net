using Microsoft.EntityFrameworkCore.Migrations;

namespace reactSIDE.Migrations
{
    public partial class m11 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "AddTime",
                table: "Items",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "Type",
                table: "Items",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AddTime",
                table: "Items");

            migrationBuilder.DropColumn(
                name: "Type",
                table: "Items");
        }
    }
}
