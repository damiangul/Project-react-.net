using System.ComponentModel.DataAnnotations;

namespace reactSIDE.Models
{
    public class SiteUser
    {
        [Key]
        public int Id {get;set;}

        [Required]
        public string UserPassword { get;set;}
        [Required]
        public string UserLogin { get;set;}
        
        public string UserRole { get;set;}
       
        public string Imie { get; set; }
      
        public string Nazwisko { get; set; }
      
        public string adresPart1 { get; set; }
    
    }
}