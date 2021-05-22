using System.ComponentModel.DataAnnotations;

namespace reactSIDE.Models
{
    public class Product
    {
        [Key]
        public int Id {get;set;}

        [Required]
        public string Title {get;set;}
        [Required]
        public string Author {get;set;}
        [Required]
        public string Genre {get;set;}

        [Required]
        public string DataWydania { get; set; }
        [Required]
        public string Foto { get; set; }
        
        [Required]
        public string Price { get; set; }
        [Required]
        public string Quantity { get; set; }

    }
}