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
    }
}