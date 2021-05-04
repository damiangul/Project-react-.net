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
        [Required]
        public string UserRole { get;set;}
        [Required]
        public string Imie { get; set; }
        [Required]
        public string Nazwisko { get; set; }
        [Required]
        public string adresPart1 { get; set; }
    
    }
}