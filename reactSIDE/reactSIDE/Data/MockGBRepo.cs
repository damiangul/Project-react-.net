using System.Collections.Generic;
using reactSIDE.Models;

namespace reactSIDE.Data
{
    public class MockGBRepo : IGBRepo
    {
        public void CreateProduct(Product ptc)
        {
            throw new System.NotImplementedException();
        }

        public IEnumerable<Product> getAllProducts()
        {
           var products = new List<Product>
           {
             new Product {Id=0,Title="NICE",Author="Me",Genre="r&b"},
             new Product {Id=1,Title="NICE1",Author="Me",Genre="r&b"},
             new Product {Id=2,Title="NICE2",Author="Me",Genre="r&b"},
           };
           return products;
        }

        public Product GetProductById(int id)
        {
            return new Product {Id=0,Title="NICE",Author="Me",Genre="r&b"};
        }

        public bool SaveChanges()
        {
            throw new System.NotImplementedException();
        }
    }
}