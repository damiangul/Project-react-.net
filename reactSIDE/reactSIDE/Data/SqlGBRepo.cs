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

        public void CreateSiteUser(SiteUser ptc)
        {
            if (ptc == null)
            {
                throw new ArgumentNullException(nameof(ptc));
            }

            _context.SiteUsers.Add(ptc);
        }

        public IEnumerable<SiteUser> getAllSiteUser()
        {
            return _context.SiteUsers.ToList();
        }

        public SiteUser GetSiteUserById(int id)
        {
            return _context.SiteUsers.FirstOrDefault(p => p.Id == id);
        }

        public void CreateItem(Item ptc)
        {
            if (ptc == null)
            {
                throw new ArgumentNullException(nameof(ptc));
            }   
            _context.Items.Add(ptc);
        }

        public IEnumerable<Item> getAllItems()
        {
            return _context.Items.ToList();
        }

        public Item getItemById(int id)
        {
            return _context.Items.FirstOrDefault(p => p.Id == id);
        }


        public bool SaveChanges()
        {
            return (_context.SaveChanges() >=0);
        }

        public void UpdateItem(Item ptc)
        {
           //method for interface
        }

        public void DeleteItem(Item ptc)
        {
            if(ptc==null)
            {
               throw new ArgumentNullException(nameof(ptc));
            }
            _context.Items.Remove(ptc);
        }

        public SiteUser LoginUser(SiteUser ptc)
        {
            return _context.SiteUsers.FirstOrDefault(p => p.UserLogin == ptc.UserLogin && p.UserPassword==ptc.UserPassword);
        }

        public void UpdateUser(SiteUser ptc)
        {
           
        }

        public void UpdateProduct(Product ptc)
        {
           
        }
    }
}