using System.ComponentModel.DataAnnotations;

namespace reactSIDE.Models
{
    public class Item
    {
        [Key]
        public int Id {get;set;}

        [Required]
        public int ProductID { get;set;}
        [Required]
        public int UserID { get;set;}
        [Required]
        public int Quantity { get;set;}  
    }
}