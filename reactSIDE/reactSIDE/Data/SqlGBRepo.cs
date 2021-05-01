using System;
using System.Collections.Generic;
using System.Linq;
using reactSIDE.Models;

namespace reactSIDE.Data
{
    public class SqlGBRepo : IGBRepo
    {
        private readonly GBCONTEXT _context;

        public SqlGBRepo(GBCONTEXT context)
        {
            _context = context;
        }

        public void CreateProduct(Product ptc)
        {
            if(ptc==null)
            {
                throw new ArgumentNullException(nameof(ptc));
            }

            _context.Products.Add(ptc);
        }

        public IEnumerable<Product> getAllProducts()
        {
            return _context.Products.ToList();
        }

        public Product GetProductById(int id)
        {
            return _context.Products.FirstOrDefault(p => p.Id == id);
        }

        public bool SaveChanges()
        {
            return (_context.SaveChanges() >=0);
        }
    }
}