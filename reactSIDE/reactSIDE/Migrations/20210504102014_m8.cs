using Microsoft.EntityFrameworkCore.Migrations;

namespace reactSIDE.Migrations
{
    public partial class m8 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Imie",
                table: "SiteUsers",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Nazwisko",
                table: "SiteUsers",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "adresPart1",
                table: "SiteUsers",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Imie",
                table: "SiteUsers");

            migrationBuilder.DropColumn(
                name: "Nazwisko",
                table: "SiteUsers");

            migrationBuilder.DropColumn(
                name: "adresPart1",
                table: "SiteUsers");
        }
    }
}
