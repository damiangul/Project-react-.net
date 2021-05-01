using Microsoft.EntityFrameworkCore.Migrations;

namespace reactSIDE.Migrations
{
    public partial class m2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "AuUserPasswordthor",
                table: "SiteUsers",
                newName: "UserLogin");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "UserLogin",
                table: "SiteUsers",
                newName: "AuUserPasswordthor");
        }
    }
}
