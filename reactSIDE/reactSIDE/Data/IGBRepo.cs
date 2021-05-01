using System.Collections.Generic;
using reactSIDE.Models;
namespace reactSIDE.Data
{
    public interface IGBRepo
    {
        bool SaveChanges();

        IEnumerable<Product> getAllProducts();
        Product GetProductById(int id);
        void CreateProduct(Product ptc);
    }
}