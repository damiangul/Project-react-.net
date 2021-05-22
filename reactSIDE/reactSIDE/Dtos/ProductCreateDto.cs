using System.ComponentModel.DataAnnotations;

namespace reactSIDE.Dtos
{
    public class ProductCreateDto
    {
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