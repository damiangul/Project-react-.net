using System.ComponentModel.DataAnnotations;

namespace reactSIDE.Dtos
{
    public class ProductReadDto
    {
     
        public int Id {get;set;}

        public string Title {get;set;}
      
        public string Author {get;set;}

        public string Genre { get; set; }

        public string DataWydania { get; set; }

        public string Foto { get; set; }

        public string Price { get; set; }
        public string Quantity { get; set; }

    }
}