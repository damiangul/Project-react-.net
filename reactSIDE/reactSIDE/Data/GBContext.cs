using reactSIDE.Models;
using Microsoft.EntityFrameworkCore;

namespace reactSIDE.Data
{
    public class GBCONTEXT : DbContext
    {
        public GBCONTEXT(DbContextOptions<GBCONTEXT> opt) : base(opt)
        {

        }

        public DbSet<Product> Products { get; set; }
    }
}