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

        IEnumerable<SiteUser> getAllSiteUser();
        SiteUser GetSiteUserById(int id);
        void CreateSiteUser(SiteUser ptc);

        IEnumerable<Item> getAllItems();
        Item getItemById(int id);
        void CreateItem(Item ptc);
        void UpdateItem(Item ptc);
        void DeleteItem(Item ptc);
    }
}